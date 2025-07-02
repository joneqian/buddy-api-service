/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-06-04 11:42:19
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-04 11:42:31
 * @FilePath: /buddy-api-service/src/modules/wecom-robot/wecom-robot.module.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { WecomRobotController } from './wecom-robot.controller';
import { WecomRobotService } from './wecom-robot.service';
import { CacheService } from '@service/cache.service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [WecomRobotController],
  providers: [WecomRobotService, CacheService],
  exports: [WecomRobotService],
})
export class WecomRobotModule {}
