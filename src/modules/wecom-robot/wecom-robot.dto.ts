/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-06-04 11:30:58
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-07-02 15:05:05
 * @FilePath: /buddy-api-service/src/modules/wecom-robot/wecom-robot.dto.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsIn,
  IsDate,
  IsEnum,
  IsNumber,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseDTO, QueryDTO } from '@dto/BaseDTO';
import { Type } from 'class-transformer';

export class UpsertWecomRobotServerDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  @ApiProperty({
    description: '服务器IP',
    example: '服务器IP',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  server_ip: string;

  @ApiProperty({
    description: '服务器端口',
    example: '服务器端口',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  server_port: number;

  @ApiPropertyOptional({
    description: '服务器状态',
    example: '服务器状态',
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1], { message: 'server_status必须为0或者1' })
  server_status?: number;
}

export class UpsertWecomRobotLoginDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  @ApiProperty({
    description: '企微登录端口',
    example: '企微登录端口',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  wecom_login_port: number;

  @ApiProperty({
    description: '用户ID',
    example: '用户ID',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  vword_user_id: string;
}

class PersonalInfoDTO {
  @ApiProperty({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  wecom_login_port: number;

  // wecom_pid
  @ApiProperty({
    description: '企微PID',
    example: 123,
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  wecom_pid: number;

  @ApiProperty({
    description: '用户ID',
    example: '用户ID',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  vword_user_id: string;

  // login_status
  @ApiProperty({
    description: '登录状态：0-未登录，1-已登录',
    example: 0,
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  @IsIn([0, 1], { message: 'login_status必须为0或者1' })
  login_status: number;
}

export class SyncWecomRobotLoginInfoDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // personal_info_list
  @ApiProperty({
    description: '个人信息列表',
    example: '个人信息列表',
    type: Array,
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PersonalInfoDTO)
  personal_info_list: PersonalInfoDTO[];
}

export class LogoutWecomRobotDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // wecom_login_port
  @ApiPropertyOptional({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsOptional()
  @IsInt()
  wecom_login_port?: number;

  @ApiPropertyOptional({
    description: '用户ID',
    example: '用户ID',
    type: String,
  })
  @IsOptional()
  @IsString()
  vword_user_id?: string;
}

export class LogoutWecomRobotCallBackDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // wecom_login_port
  @ApiProperty({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  wecom_login_port: number;
}

export class GetWecomRobotLoginQrcodeDTO extends BaseDTO {
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // wecom_login_port
  @ApiPropertyOptional({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsOptional()
  @IsInt()
  wecom_login_port?: number;

  @ApiPropertyOptional({
    description: '用户ID',
    example: '用户ID',
    type: String,
  })
  @IsOptional()
  @IsString()
  vword_user_id?: string;
}

export class UpdateNeedVerifyCodeDTO extends BaseDTO {
  // mac_address
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // wecom_login_port
  @ApiProperty({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  wecom_login_port: number;

  // need_verify_code
  @ApiProperty({
    description: '是否需要验证码',
    example: '是否需要验证码',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  need_verify_code: number;
}

export class InputVerifyCodeDTO extends BaseDTO {
  // mac_address
  @ApiProperty({
    description: 'MAC地址',
    example: 'MAC地址',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  mac_address: string;

  // wecom_login_port
  @ApiPropertyOptional({
    description: '登录端口',
    example: '登录端口',
    type: Number,
  })
  @IsOptional()
  @IsInt()
  wecom_login_port?: number;

  @ApiPropertyOptional({
    description: '用户ID',
    example: '用户ID',
    type: String,
  })
  @IsOptional()
  @IsString()
  vword_user_id?: string;

  // verify_code
  @ApiProperty({
    description: '验证码',
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  verify_code: string;
}
