/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-08-07 03:24:00
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-30 13:31:23
 * @FilePath: /buddy-api-service/src/init.module.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '@service/cache.service';
import { InjectModel } from '@nestjs/sequelize';
import { CacheKey, DEVICE_TYPE, ex_attributes2 } from '@config/global';
import { HttpModule } from '@nestjs/axios';
import { WXCoreFactory } from '@easy-front-core-sdk/wx';
import { SchedulerRegistry } from '@nestjs/schedule';
import { WXPayCoreFactory } from '@easy-front-core-sdk/wxpay';
import { AliPayCoreCoreFactory, GateWay } from '@easy-front-core-sdk/alipay';
import { CPWXCoreFactory } from '@easy-front-core-sdk/cpwx';
import _ from 'lodash';
import dayjs from 'dayjs';
import * as fs from 'fs';
import { resolve } from 'path';

@Module({
  imports: [HttpModule],
  providers: [CacheService],
})
export class InitModule implements OnModuleInit {
  constructor(
    private readonly cacheService: CacheService,
    private readonly configService: ConfigService,
    private schedulerRegistry: SchedulerRegistry,
  ) {}
  async onModuleInit(): Promise<void> {}
}
