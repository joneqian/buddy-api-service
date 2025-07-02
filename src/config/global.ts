/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-08-07 03:24:00
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-04 19:31:07
 * @FilePath: /buddy-api-service/src/config/global.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

export enum WeiTaiResponseError {
  InvalidRequest = '请求缺少必需的参数、包含无效的参数值、包含重复的参数或者参数的格式错误。',
  UnauthorizedClient = '客户端应用未获得请求该授权的权限。',
  AccessDenied = '资源所有者或授权服务器拒绝该请求。',
  UnsupportedResponseType = '授权服务器不支持使用该响应类型。',
  UnsupportedGrantType = '授权服务器不支持使用该授权模式。',
  InvalidClient = '客户端身份验证失败，没有访问该接口的权限。accessToken已经过期、失效或者没有访问该接口的权限。',
  InvalidGrant = '授权验证失败，clientId、clientSecret或code错误、过期或者已经失效；或者refreshToken已经失效。',
  ServerError = '授权服务器遇到意外情况，无法完成请求。',
  TemporarilyUnavailable = '由于服务器临时过载或维护，授权服务器当前无法处理该请求。',
}

export enum ResponseCode {
  OK = 0,
  PARM_ERROR = 1000,
  SIGN_ERROR = 1001,
  SYS_ERROR = 9999,
  UNKOWN_ERROR = 10000,
}
export enum LockKey {
  COMPANY_WALLET_LOCK = 'COMPANY_WALLET_LOCK',
}

export enum CacheKey {
  COMPANY_CONFIG = 'COMPANY_CONFIG',
  SESSION_USER = 'SESSION_USER',
  ALIYUN_NLS_TOKEN = 'ALIYUN_NLS_TOKEN',
  TODAY_AGENT_QUERY_NUM = 'TODAY_AGENT_QUERY_NUM',
  ROBOT_CONFIG = 'ROBOT_CONFIG',
}

export const ex_attributes_no_id = {
  exclude: ['id', 'deleted_at', 'created_at', 'updated_at', 'created_by', 'updated_by'],
};

export const ex_attributes = {
  exclude: ['deleted_at', 'created_at', 'updated_at', 'created_by', 'updated_by'],
};

export const ex_attributes2 = {
  exclude: ['deleted_at', 'created_by', 'updated_by'],
};

export const DEFAULT_USER_ID = 999999;
export const DEFAULT_USER_NAME = 'default_system';

export enum TASK_NORMAL_STATUS {
  PENDING = 'pending',
  WAIT_AUDIT = 'wait_audit',
  AUDIT_PASSED = 'audit_passed',
  WAIT_SEND = 'wait_send',
  SENT = 'sent',
  COMPLETED = 'completed',
}

export enum TASK_EXCEPTION_STATUS {
  AUDIT_FAILED = 'audit_failed',
  SEND_FAILED = 'send_failed',
  CANCELLED = 'cancelled',
  TIMEOUT = 'timeout',
  FAILED = 'failed',
}

export enum DEVICE_TYPE {
  血糖仪 = 'GLUCOMETER',
  机器人 = 'ROBOT',
  电子秤 = 'ELECTRONIC_SCALE',
}

export enum WALLET_CHANGE_OPERATE_REMARK {
  MANUAL_AIRDROP = '赠送',
  MANUAL_DEDUCT = '人工扣除',
  MANUAL_FREEZE = '人工冻结',
  MANUAL_UNFREEZE = '人工解冻',
  RECHARGE = '充值',
  RECHARGE_GIVE = '充值赠送',
  REGISTER_GIVE = '注册赠送',
  AI_TASK_EXECUTION = 'AI任务执行',
  AI_TASK_MESSAGE_RECOGNITION = 'AI信息识别',
  AI_CHAT = 'AI对话',
  AI_CHAT_TEXT = 'AI对话-文本',
  AI_CHAT_TEXT_IMAGE = 'AI对话-图文',
  CREATE_CUSTOMER = '创建客户',
}

export enum WALLET_CHANGE_OPERATE_TYPE {
  MANUAL_AIRDROP = 'MANUAL_AIRDROP',
  MANUAL_DEDUCT = 'MANUAL_DEDUCT',
  MANUAL_FREEZE = 'MANUAL_FREEZE',
  MANUAL_UNFREEZE = 'MANUAL_UNFREEZE',
  RECHARGE = 'RECHARGE',
  RECHARGE_GIVE = 'RECHARGE_GIVE',
  REGISTER_GIVE = 'REGISTER_GIVE',
  AI_TASK_EXECUTION = 'AI_TASK_EXECUTION',
  AI_TASK_MESSAGE_RECOGNITION = 'AI_TASK_MESSAGE_RECOGNITION',
  AI_CHAT = 'AI_CHAT',
  AI_CHAT_TEXT = 'AI_CHAT_TEXT',
  AI_CHAT_TEXT_IMAGE = 'AI_CHAT_TEXT_IMAGE',
  CREATE_CUSTOMER = 'CREATE_CUSTOMER',
}

export enum WALLET_TYPE {
  CASH = 'CASH',
  K_DOU = 'K_DOU',
}

export enum PROJECT_TAG_TYPE {
  CUSTOMER_MARKETING = 'CUSTOMER_MARKETING',
}

// 公司版本
export enum COMPANY_EDITION {
  PERSONAL_FREE = 'personal_free',
  PERSONAL_CHARGE = 'personal_charge',
  ENTERPRISE_CHARGE = 'enterprise_charge',
  ENTERPRISE_CUSTOM = 'enterprise_custom',
}

// 公司版本对应的默认项目标识符
export enum DEFAULT_PROJECT_CODE {
  PERSONAL_FREE = 'proj_personal_free_edition_template',
  PERSONAL_CHARGE = 'proj_personal_charge_edition_template',
  ENTERPRISE_CHARGE = 'proj_enterprise_charge_edition_template',
  ENTERPRISE_CUSTOM = 'proj_enterprise_custom_edition_template',
}

export enum AI_VARIABLE_TYPE {
  CUSTOMER_MARKETING_TAG_VARIABLE = 'CUSTOMER_MARKETING_TAG_VARIABLE',
  CUSTOMER_MARKETING_ORGANIZATION_VARIABLE = 'CUSTOMER_MARKETING_ORGANIZATION_VARIABLE',
  SYSTEM_MARKETING_VARIABLE = 'SYSTEM_MARKETING_VARIABLE',
}

export enum AI_FORM_COLLECT_TASK_STATUS {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

export enum MARKETING_TASK_STATUS {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  PAUSED = 'PAUSED',
  CANCELLED = 'CANCELLED',
}
