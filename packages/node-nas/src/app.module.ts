import { Module } from '@nestjs/common';
import { SharingModule } from './sharing/sharing.module';
import { FileModule } from './file/file.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PluginModule } from './plugin/plugin.module';
import { ServiceModule } from './service/service.module';
import { ProcessModule } from './process/process.module';
import { ConsoleModule } from './console/console.module';
import { DiskModule } from './disk/disk.module';
import { NetworkModule } from './network/network.module';
import { InfoModule } from './info/info.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        '../client',
      ),
      renderPath: '/',
    }),
    AuthModule,
    ConsoleModule,
    DashboardModule,
    DiskModule,
    FileModule,
    InfoModule,
    NetworkModule,
    PluginModule,
    ProcessModule,
    ServiceModule,
    SharingModule,
    UsersModule,
    PrismaModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
