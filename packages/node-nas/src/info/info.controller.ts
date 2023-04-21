import { Controller, Get, UseGuards } from '@nestjs/common';
import { InfoService } from './info.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('info')
@UseGuards(JwtAuthGuard)
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  async getInfo(): Promise<any> {
    return {
      status: 'ok',
      data: await this.infoService.getInfo(),
    };
  }
}
