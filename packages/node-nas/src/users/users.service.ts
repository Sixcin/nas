import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { $ } from 'execa';
import { GID_GROUP_REGEX, SUDO_GROUP_REGEX } from './constants';
import { Role } from './interfaces/role';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async isSudo(username: string): Promise<boolean> {
    const args = ['-l', '-U', username];
    const { stdout } = await $`sudo ${args}`;

    return stdout.split('\n').at(-1)?.includes('(ALL) ALL') ?? false;
  }

  async getUsers() {
    return Promise.all(
      (await this.#getSysUsers()).map(async (line: String) => {
        const [username, , uid] = line.split(':');

        return {
          username,
          role: this.#getRole(username, uid, await this.isSudo(username)),
        };
      }),
    );
  }

  async getUsersCount(): Promise<number> {
    return (await this.#getSysUsers()).length;
  }

  async getUserByUsername(username: string) {
    const [, , uid, gid, fullName, home, shell] = (
      await this.#getSysUsersByUsername(username)
    ).split(':');

    return {
      username,
      role: this.#getRole(username, uid, await this.isSudo(username)),
      groups: await this.#getUserGroup(username),
      uid,
      gid,
      fullName,
      home,
      shell,
    };
  }

  async getGroups() {
    const sudoGroups = await this.#getSudoGroups();

    return (await this.#getSysGroups()).map((line: String) => {
      const [groupName, , gid, members] = line.split(':');

      return {
        groupName,
        gid,
        members: members.split(',').filter((member) => member.length > 0),
        sudo: sudoGroups.includes(groupName),
      };
    });
  }

  async getGroupsCount(): Promise<number> {
    return (await this.#getSysGroups()).length;
  }

  async #getSysUsers(): Promise<string[]> {
    const args = ['passwd'];
    const { stdout } = await $`getent ${args}`;

    return stdout.split('\n');
  }

  async #getSysUsersByUsername(username: string): Promise<string> {
    const args = ['passwd', username];
    const { stdout } = await $`getent ${args}`;

    return stdout;
  }

  async #getSysGroups(groupName?: string): Promise<string[]> {
    const args = groupName ? ['group', groupName] : ['group'];
    const { stdout } = await $`getent ${args}`;

    return stdout.split('\n');
  }

  async #getSudoGroups(): Promise<string[]> {
    const args = ['/etc/sudoers'];
    const { stdout } = await $`cat ${args}`;

    return stdout
      .split('\n')
      .map((line: string) => SUDO_GROUP_REGEX.exec(line)?.[1] ?? '')
      .filter((name: string) => name.length > 0);
  }

  async #getUserGroup(username: string): Promise<string[]> {
    const args = [username];
    const { stdout } = await $`id ${args}`;
    const groups = stdout
      .split('=')
      .at(-1)
      ?.split(',')
      .map((groupStr) => GID_GROUP_REGEX.exec(groupStr)?.[1] ?? '');

    if (groups === undefined) {
      throw new Error('User not found');
    }

    return groups;
  }

  #getRole(username: string, uid: string, sudo: boolean): Role {
    if (username === 'root') {
      return 'admin';
    } else if (+uid < 1000) {
      return 'built-in';
    } else if (sudo) {
      return 'admin';
    } else {
      return 'user';
    }
  }
}
