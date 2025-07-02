/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-03-28 23:11:20
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-07-02 14:28:04
 * @FilePath: /buddy-api-service/src/service/cron-task.service.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Sequelize } from 'sequelize-typescript';
import { Op, FindAndCountOptions, QueryTypes, DataTypes } from 'sequelize';

@Injectable()
export class CronTaskService {
  private sync_lock: any = {};
  // && process.env.NODE_ENV !== 'development';
  private main_instance = (process.env.INSTANCE_ID === '0' || process.env.INSTANCE_ID == null) && process.env.NODE_ENV !== 'development';
  constructor(private sequelize: Sequelize) {
    setTimeout(() => {
      // this.builderCustomerPlanDailyTasksCron();
      console.log('main_instance', this.main_instance);
    }, 3000);
  }

  // 1点再补救一次
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async setMachineTaskExpired() {}
}
