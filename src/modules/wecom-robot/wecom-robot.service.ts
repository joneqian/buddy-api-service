/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-06-04 11:35:22
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-07-02 17:54:12
 * @FilePath: /buddy-api-service/src/modules/wecom-robot/wecom-robot.service.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Op, QueryTypes, where } from 'sequelize';
import { CacheService } from '@service/cache.service';
import * as _ from 'lodash';
import { uuid } from '@libs/cryptogram';
import dayjs from 'dayjs';
import { WecomRobotRequest } from '@libs/wecom-robot.request';
import { DEFAULT_USER_ID, ex_attributes_no_id, ex_attributes, ex_attributes2 } from '@config/global';

import {
  UpsertWecomRobotServerDTO,
  UpsertWecomRobotLoginDTO,
  SyncWecomRobotLoginInfoDTO,
  GetWecomRobotLoginQrcodeDTO,
  LogoutWecomRobotDTO,
  LogoutWecomRobotCallBackDTO,
  UpdateNeedVerifyCodeDTO,
  InputVerifyCodeDTO,
} from './wecom-robot.dto';

import { TWecomChatRoom, TWecomChatRoomMember, TWecomRobot, TWecomRobotLogin, TWecomRobotServer } from '@models/index';

@Injectable()
export class WecomRobotService {
  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
    private readonly cacheService: CacheService,
    @InjectModel(TWecomRobot)
    private tWecomRobot: typeof TWecomRobot,
    @InjectModel(TWecomRobotLogin)
    private tWecomRobotLogin: typeof TWecomRobotLogin,
    @InjectModel(TWecomRobotServer)
    private tWecomRobotServer: typeof TWecomRobotServer,
    @InjectModel(TWecomChatRoom)
    private tWecomChatRoom: typeof TWecomChatRoom,
    @InjectModel(TWecomChatRoomMember)
    private tWecomChatRoomMember: typeof TWecomChatRoomMember,
  ) {}

  async upsertWecomRobotServer(requestBody: UpsertWecomRobotServerDTO, user: any) {
    const created_by = user?.id ?? DEFAULT_USER_ID;
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, server_ip, server_port, server_status } = requestBody;
    const default_data: any = _.omitBy(
      {
        mac_address,
        server_ip,
        server_port,
        server_status,
        created_by,
        updated_by,
      },
      _.isNil,
    );

    const [server, created_server] = await this.tWecomRobotServer.findOrCreate({
      attributes: ex_attributes,
      where: { mac_address, server_ip },
      defaults: default_data,
      raw: true,
    });

    if (!created_server) {
      const update_data = _.omitBy(
        {
          server_port,
          server_status,
          updated_by,
        },
        _.isNil,
      );

      await this.tWecomRobotServer.update(update_data, {
        where: { id: server.id },
      });
    }

    return server;
  }

  async upsertWecomRobotLogin(requestBody: UpsertWecomRobotLoginDTO, user: any) {
    const created_by = user?.id ?? DEFAULT_USER_ID;
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, wecom_login_port, vword_user_id } = requestBody;

    const default_data: any = _.omitBy(
      {
        mac_address,
        wecom_login_port,
        vword_user_id,
        created_by,
        updated_by,
      },
      _.isNil,
    );

    const [login, created_login] = await this.tWecomRobotLogin.findOrCreate({
      attributes: ex_attributes,
      where: { vword_user_id },
      defaults: default_data,
      raw: true,
    });

    if (!created_login) {
      const update_data = _.omitBy(
        {
          mac_address,
          wecom_login_port,
          updated_by,
        },
        _.isNil,
      );

      await this.tWecomRobotLogin.update(update_data, {
        where: { id: login.id },
      });
    }

    return login;
  }

  async syncWecomRobotLoginInfo(requestBody: SyncWecomRobotLoginInfoDTO, user: any) {
    const created_by = user?.id ?? DEFAULT_USER_ID;
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, personal_info_list } = requestBody;

    const exist_server = await this.tWecomRobotServer.findOne({
      attributes: ex_attributes,
      where: { mac_address },
    });

    if (!exist_server) {
      throw new Error('服务器不存在');
    }

    for (const personal_info_item of personal_info_list) {
      const { wecom_login_port, wecom_pid, vword_user_id, login_status, personal_info } = personal_info_item;

      const exist_login = await this.tWecomRobotLogin.findOne({
        attributes: ex_attributes,
        where: { mac_address, wecom_login_port, vword_user_id },
      });

      if (!exist_login) {
        continue;
      }

      const update_data = _.omitBy(
        {
          wecom_pid,
          login_status,
          login_status_updated_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          updated_by,
        },
        _.isNil,
      );

      await this.tWecomRobotLogin.update(update_data, {
        where: { id: exist_login.id },
      });

      const {
        alias,
        avatar_url,
        corp_id,
        corp_name,
        corp_short_name,
        dept_id,
        dept_name,
        email,
        job_name,
        mobile,
        nick_name,
        position,
        real_name,
        sex,
        user_id,
      } = personal_info as any;

      const default_data: any = _.omitBy(
        {
          vwork_user_id: user_id,
          alias,
          avatar_url,
          corp_id,
          corp_name,
          corp_short_name,
          dept_id,
          dept_name,
          email,
          job_name,
          mobile,
          nick_name,
          position,
          real_name,
          sex: parseInt(sex),
          created_by,
          updated_by,
        },
        _.isNil,
      );

      const [wecom_robot, created_wecom_robot] = await this.tWecomRobot.findOrCreate({
        attributes: ex_attributes,
        where: { vwork_user_id: user_id },
        defaults: default_data,
      });

      if (!created_wecom_robot) {
        const update_data = _.omitBy(
          {
            alias,
            avatar_url,
            corp_id,
            corp_name,
            corp_short_name,
            dept_id,
            dept_name,
            email,
            job_name,
            mobile,
            nick_name,
            position,
            real_name,
            sex: parseInt(sex),
            updated_by,
          },
          _.isNil,
        );
        await this.tWecomRobot.update(update_data, {
          where: { id: wecom_robot.id },
        });
      }
    }
  }

  async getWecomRobotLoginQrcode(requestBody: GetWecomRobotLoginQrcodeDTO, user: any) {
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, wecom_login_port, vword_user_id } = requestBody;

    if (!vword_user_id && !wecom_login_port) {
      throw new Error('用户ID或登录端口不能为空');
    }

    const where_wecom_login: any = _.omitBy(
      {
        mac_address,
        wecom_login_port,
        vword_user_id,
      },
      _.isNil,
    );

    const exist_login: any = await this.tWecomRobotLogin.findOne({
      attributes: ['id', 'mac_address', 'wecom_login_port', 'login_status'],
      include: [
        {
          required: true,
          model: this.tWecomRobotServer,
          as: 'robot_server',
          attributes: ['server_ip', 'server_port'],
        },
      ],
      where: where_wecom_login,
    });

    if (!exist_login) {
      throw new Error('登录信息不存在');
    }

    if (exist_login.login_status === 1) {
      throw new Error('企微机器人已登录，请勿重复登录');
    }

    const { server_ip, server_port } = exist_login.robot_server;

    if (!server_ip || !server_port) {
      throw new Error('企微服务器未配置，请联系管理员');
    }

    const wecom_robot_request = new WecomRobotRequest(`http://${server_ip}:${server_port}`);

    const response: any = await wecom_robot_request.post({
      url: '/wecom-robot/get-wecom-robot-login-qrcode',
      request_data: {
        vword_user_id: exist_login.vword_user_id,
        wecom_login_port: exist_login.wecom_login_port,
      },
    });

    const { data_uri, wecom_pid } = response;
    await this.tWecomRobotLogin.update(
      {
        wecom_pid,
        login_status: 0,
        need_verify_code: 0,
        updated_by,
      },
      { where: { id: exist_login.id } },
    );

    return data_uri;
  }

  async logoutWecomRobot(requestBody: LogoutWecomRobotDTO, user: any) {
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, wecom_login_port, vword_user_id } = requestBody;

    if (!vword_user_id && !wecom_login_port) {
      throw new Error('用户ID或登录端口不能为空');
    }

    const where_wecom_login: any = _.omitBy(
      {
        mac_address,
        wecom_login_port,
        vword_user_id,
      },
      _.isNil,
    );

    const exist_login: any = await this.tWecomRobotLogin.findOne({
      attributes: ['id', 'mac_address', 'wecom_login_port', 'vword_user_id'],
      include: [
        {
          required: true,
          model: this.tWecomRobotServer,
          as: 'robot_server',
          attributes: ['server_ip', 'server_port'],
        },
      ],
      where: where_wecom_login,
    });

    if (!exist_login) {
      throw new Error('登录信息不存在');
    }

    if (exist_login.login_status === 0) {
      throw new Error('企微机器人未登录，请勿重复退出');
    }

    const { server_ip, server_port } = exist_login.robot_server;

    if (!server_ip || !server_port) {
      throw new Error('企微服务器未配置，请联系管理员');
    }

    const wecom_robot_request = new WecomRobotRequest(`http://${server_ip}:${server_port}`);
    await wecom_robot_request.post({
      url: '/wecom-robot/logout',
      request_data: {
        user_id: exist_login.vword_user_id,
        wecom_login_port,
      },
    });
  }

  async logoutWecomRobotCallBack(requestBody: LogoutWecomRobotCallBackDTO, user: any) {
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, wecom_login_port } = requestBody;

    await this.tWecomRobotLogin.update({ login_status: 0, wecom_pid: 0, updated_by }, { where: { mac_address, wecom_login_port } });
  }

  async updateNeedVerifyCode(requestBody: UpdateNeedVerifyCodeDTO, user: any) {
    const updated_by = user?.id ?? DEFAULT_USER_ID;
    const { mac_address, wecom_login_port, need_verify_code } = requestBody;

    await this.tWecomRobotLogin.update({ need_verify_code, updated_by }, { where: { mac_address, wecom_login_port } });
  }

  async inputVerifyCode(requestBody: InputVerifyCodeDTO, user: any) {
    const { mac_address, wecom_login_port, vword_user_id, verify_code } = requestBody;

    if (!vword_user_id && !wecom_login_port) {
      throw new Error('用户ID或登录端口不能为空');
    }

    const where_wecom_login: any = _.omitBy(
      {
        mac_address,
        wecom_login_port,
        vword_user_id,
      },
      _.isNil,
    );
    const exist_login: any = await this.tWecomRobotLogin.findOne({
      attributes: ['id', 'mac_address', 'wecom_login_port', 'vword_user_id'],
      include: [
        {
          required: true,
          model: this.tWecomRobotServer,
          as: 'robot_server',
          attributes: ['server_ip', 'server_port'],
        },
      ],
      where: where_wecom_login,
    });

    if (!exist_login) {
      throw new Error('登录信息不存在');
    }

    if (exist_login.login_status === 0) {
      throw new Error('企微机器人未登录，请勿重复退出');
    }

    const { server_ip, server_port } = exist_login.robot_server;

    if (!server_ip || !server_port) {
      throw new Error('企微服务器未配置，请联系管理员');
    }

    const wecom_robot_request = new WecomRobotRequest(`http://${server_ip}:${server_port}`);
    await wecom_robot_request.post({
      url: '/wecom-robot/input-verify-code',
      request_data: {
        wecom_login_port: exist_login.wecom_login_port,
        verify_code,
      },
    });
    return;
  }
}
