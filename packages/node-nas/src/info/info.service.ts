import { Injectable, OnModuleInit } from '@nestjs/common';
import { OSInfo } from './interfaces/osInfo';
import { Info } from './interfaces/info';
import si from 'systeminformation';

@Injectable()
export class InfoService implements OnModuleInit {
  private static info: Info;

  async onModuleInit(): Promise<void> {
    InfoService.info = {
      osInfo: await this.getOsInfo(),
      version: this.getVersion(),
    };
  }

  async getOsInfo(): Promise<OSInfo> {
    const osData = await si.osInfo();

    return {
      arch: osData.arch,
      distro: osData.distro,
      kernel: osData.kernel,
      pf: osData.platform,
      release: osData.release,
    };
  }

  getVersion(): string {
    return '1.0.0';
  }

  async getInfo(): Promise<Info> {
    return InfoService.info;
  }
}
