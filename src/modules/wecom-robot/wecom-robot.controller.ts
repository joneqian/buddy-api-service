/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-06-04 11:41:04
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-07-02 14:37:22
 * @FilePath: /buddy-api-service/src/modules/wecom-robot/wecom-robot.controller.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Controller, Get, Post, Req, Res, Body, Query, UsePipes, Session, UseFilters, SetMetadata } from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiBody, ApiQuery, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { ValidationPipe } from '@pipe/validation.pipe';
import { CacheService } from '@service/cache.service';
import { AllExceptionsFilter } from '@filter/any-exception.filter';
import { WecomRobotService } from './wecom-robot.service';
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

@ApiTags('企微机器人 API')
@ApiHeader({
  name: 'x-from-source',
  description: '如果是swagger发送的请求，会跳过token和sign验证',
  example: 'swagger',
  schema: {
    type: 'string',
    example: 'swagger',
  },
})
@Controller('wecom-robot')
export class WecomRobotController {
  constructor(
    private readonly wecomRobotService: WecomRobotService,
    private readonly cacheService: CacheService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({ summary: '添加/更新企微机器人服务器', description: '添加/更新企微机器人服务器' })
  @ApiBody({
    description: '请求参数',
    type: UpsertWecomRobotServerDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('upsert-wecom-robot-server')
  async upsertWecomRobotServer(@Body() body: UpsertWecomRobotServerDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.upsertWecomRobotServer(body, user);
  }

  @ApiOperation({ summary: '添加/更新企微机器人登录', description: '添加/更新企微机器人登录' })
  @ApiBody({
    description: '请求参数',
    type: UpsertWecomRobotLoginDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('upsert-wecom-robot-login')
  async upsertWecomRobotLogin(@Body() body: UpsertWecomRobotLoginDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.upsertWecomRobotLogin(body, user);
  }

  @ApiOperation({ summary: '同步企微机器人登录信息', description: '同步企微机器人登录信息' })
  @ApiBody({
    description: '请求参数',
    type: SyncWecomRobotLoginInfoDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('sync-wecom-robot-login-info')
  async syncWecomRobotLoginInfo(@Body() body: SyncWecomRobotLoginInfoDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.syncWecomRobotLoginInfo(body, user);
  }

  @ApiOperation({ summary: '获取企微机器人登录二维码', description: '获取企微机器人登录二维码' })
  @ApiBody({
    description: '请求参数',
    type: GetWecomRobotLoginQrcodeDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('get-wecom-robot-login-qrcode')
  async getWecomRobotLoginQrcode(@Body() body: GetWecomRobotLoginQrcodeDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.getWecomRobotLoginQrcode(body, user);
  }

  @ApiOperation({ summary: '退出企微机器人登录', description: '退出企微机器人登录' })
  @ApiBody({
    description: '请求参数',
    type: LogoutWecomRobotDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('logout-wecom-robot')
  async logoutWecomRobot(@Body() body: LogoutWecomRobotDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.logoutWecomRobot(body, user);
  }

  @ApiOperation({ summary: '退出企微机器人登录回调', description: '退出企微机器人登录回调' })
  @ApiBody({
    description: '请求参数',
    type: LogoutWecomRobotCallBackDTO,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new AllExceptionsFilter())
  @Post('logout-wecom-robot-callback')
  async logoutWecomRobotCallback(@Body() body: LogoutWecomRobotCallBackDTO, @Session() session: any) {
    const { user } = session;
    return this.wecomRobotService.logoutWecomRobotCallBack(body, user);
  }
}
