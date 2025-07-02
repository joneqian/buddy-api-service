/**
 * 登录类型：1-账号名密码 2-手机号 3-微信公众号授权 4-小程序授权 5-微信unionid登录
 */
export enum LOGIN_TYPE {
  账号名密码登录 = 1,
  手机号验证码 = 2,
  微信公众号授权 = 3,
  小程序授权 = 4,
  微信unionid登录 = 5,
}

/**
 * 角色类型 1-平台端 2-商家端 3-小程序端
 */
export enum ROLE_TYPE {
  平台端 = 1,
  商家端 = 2,
  小程序端 = 3,
}

/**
 * 权限类型 1-菜单 2-按钮
 */
export enum RIGHT_TYPE {
  菜单 = 1,
  按钮 = 2,
}

/**
 * 验证码类型
 */
export enum SMS_TYPE {
  验证码 = '验证码',
  通用 = '通用',
}

/**
 * 短信渠道
 */
export enum SMS_CHHANEL {
  阿里云 = '阿里云',
  腾讯云 = '腾讯云',
  国都 = '国都',
}

/**
 * 短信状态：1-待验证 10-已验证 11-发送失败
 */
export enum SMS_STATUS {
  待验证 = 1,
  已验证 = 10,
  发送失败 = 11,
  验证失败 = 12,
}

/**
 * 员工状态: 0-禁用, 1-启用
 */
export enum EMPLOYEE_STATUS {
  禁用 = 0,
  启用 = 1,
}

/**
 * 客户状态: 0-禁用, 1-启用
 */
export enum CUSTOMER_STATUS {
  禁用 = 0,
  启用 = 1,
}

// 方案状态: no-service-未服务 pending-待开始, in_progress-进行中, paused-暂停中, completed-已完成
export enum PLAN_STATUS {
  未服务 = 'no-service',
  待开始 = 'pending',
  进行中 = 'in_progress',
  暂停中 = 'paused',
  已完成 = 'completed',
}

/**
 * frequency_type 'daily','weekly','monthly','quarterly','yearly'
 */
export enum FREQUENCY_TYPE {
  每天 = 'daily',
  每周 = 'weekly',
  每月 = 'monthly',
  每季度 = 'quarterly',
  每年 = 'yearly',
  某一天 = 'someday',
}

// 任务状态 'pending','in_progress','completed','cancelled'
export enum TASK_STATUS {
  待执行 = 'pending',
  进行中 = 'in_progress',
  已完成 = 'completed',
  已取消 = 'cancelled',
  超时 = 'timeout',
  失败 = 'failed',
  暂停 = 'paused',
}

// 任务类型 'info_collect','comments'
export enum TASK_CATEGORY {
  信息收集 = 'info_collect',
  点评 = 'comments',
}

// 代办状态 'pending','completed','cancelled'
export enum TODO_STATUS {
  待处理 = 'pending',
  已处理 = 'completed',
  已取消 = 'cancelled',
}

// department_status: 0-禁用, 1-启用
export enum DEPARTMENT_STATUS {
  禁用 = 0,
  启用 = 1,
}

// 服务状态 正常-normal 暂停-paused
export enum SERVICE_STATUS {
  正常 = 'normal',
  暂停 = 'paused',
}

// 设备类型 // 'GLUCOMETER','ROBOT','ELECTRONIC_SCALE'

export enum DEVICE_TYPE {
  血糖仪 = 'GLUCOMETER',
  机器人 = 'ROBOT',
  电子秤 = 'ELECTRONIC_SCALE',
}

// 微信交易类型  JSAPI：公众号支付 NATIVE：扫码支付 App：App支付 MICROPAY：付款码支付 MWEB：H5支付 FACEPAY：刷脸支付
// 兼容支付宝
export enum TRADE_TYPE {
  公众号支付 = 'JSAPI',
  扫码支付 = 'NATIVE',
  App支付 = 'App',
  付款码支付 = 'MICROPAY',
  H5支付 = 'MWEB',
  刷脸支付 = 'FACEPAY',
}

// 微信支付交易状态 枚举值：
// SUCCESS：支付成功
// REFUND：转入退款
// NOTPAY：未支付
// CLOSED：已关闭
// REVOKED：已撤销（付款码支付）
// USERPAYING：用户支付中（付款码支付）
// PAYERROR：支付失败(其他原因，如银行返回失败)
export enum WX_TRADE_STATE {
  支付成功 = 'SUCCESS',
  转入退款 = 'REFUND',
  未支付 = 'NOTPAY',
  已关闭 = 'CLOSED',
  已撤销 = 'REVOKED',
  用户支付中 = 'USERPAYING',
  支付失败 = 'PAYERROR',
}

// 支付宝交易状态 枚举值：
// WAIT_BUYER_PAY：交易创建，等待买家付款。
// TRADE_CLOSED：在指定时间段内未支付时关闭的交易或在交易完成全额退款成功时关闭的交易。
// TRADE_SUCCESS：商家签约的产品支持退款功能的前提下，买家付款成功。
// TRADE_FINISHED：商家签约的产品不支持退款功能的前提下，买家付款成功。或者，商家签约的产品支持退款功能的前提下，交易已经成功并且已经超过可退款期限。
export enum ALI_TRADE_STATE {
  支付成功 = 'TRADE_SUCCESS',
  未支付 = 'WAIT_BUYER_PAY',
  已关闭 = 'TRADE_CLOSED',
  交易完成 = 'TRADE_FINISHED',
}

// 支付渠道 wepay alipay
export enum PAY_CHANNEL {
  微信 = 'wepay',
  支付宝 = 'alipay',
}

// JOB状态: pending-待开始, in_progress-进行中, completed-已完成,failed-失败
export enum JOB_STATUS {
  待开始 = 'pending',
  进行中 = 'in_progress',
  已完成 = 'completed',
  失败 = 'failed',
}
