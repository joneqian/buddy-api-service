/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-08-07 03:24:00
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-30 17:52:16
 * @FilePath: /buddy-api-service/src/db.module.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Global, Module } from '@nestjs/common';
import { InjectModel, SequelizeModule } from '@nestjs/sequelize';

import { TWecomChatRoom, TWecomChatRoomMember, TWecomRobot, TWecomRobotLogin, TWecomRobotServer } from '@models/index';

@Global()
@Module({
  imports: [SequelizeModule.forFeature([TWecomChatRoom, TWecomChatRoomMember, TWecomRobot, TWecomRobotLogin, TWecomRobotServer])],
  exports: [SequelizeModule],
  controllers: [],
  providers: [],
})
export class DBModule {
  constructor(
    @InjectModel(TWecomChatRoom)
    private tWecomChatRoom: typeof TWecomChatRoom,
    @InjectModel(TWecomChatRoomMember)
    private tWecomChatRoomMember: typeof TWecomChatRoomMember,
    @InjectModel(TWecomRobot)
    private tWecomRobot: typeof TWecomRobot,
    @InjectModel(TWecomRobotLogin)
    private tWecomRobotLogin: typeof TWecomRobotLogin,
    @InjectModel(TWecomRobotServer)
    private tWecomRobotServer: typeof TWecomRobotServer,
  ) {
    this.tWecomRobotLogin.hasOne(this.tWecomRobotServer, {
      foreignKey: 'mac_address',
      sourceKey: 'mac_address',
      as: 'robot_server',
    });

    this.tWecomRobotServer.hasMany(this.tWecomRobotLogin, {
      foreignKey: 'mac_address',
      sourceKey: 'mac_address',
      as: 'wecom_logins',
    });
  }
}
