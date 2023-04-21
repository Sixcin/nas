import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { FilterUserDto } from './dto/filter-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user')
  async getUsers() {
    return {
      status: 'ok',
      data: await this.usersService.getUsers(),
    };
  }

  @Post('user/filter')
  async getUsersByFilter(@Body() filterUserDto: FilterUserDto) {
    return {
      status: 'ok',
      data: await this.usersService.getUsers(),
    };
  }

  @Get('user/username/:username')
  async getUserByUsername(@Param('username') username: string) {
    try {
      return {
        status: 'ok',
        data: await this.usersService.getUserByUsername(username),
      };
    } catch (e) {
      return {
        status: 'error',
        message: 'User not found',
      };
    }
  }

  @Get('user/count')
  async getUsersCount() {
    return {
      status: 'ok',
      data: {
        count: await this.usersService.getUsersCount(),
      },
    };
  }

  @Get('group')
  async getGroups() {
    return {
      status: 'ok',
      data: await this.usersService.getGroups(),
    };
  }

  @Get('group/count')
  async getGroupsCount() {
    return {
      status: 'ok',
      data: {
        count: await this.usersService.getGroupsCount(),
      },
    };
  }
}
