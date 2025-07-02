/*
 * @Author: leyi leyi@myun.info
 * @Date: 2021-11-25 17:08:33
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2024-08-23 10:14:06
 * @FilePath: /buddy-api-service/src/config/app.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { envBoolean, envNumber, env } from '@libs/env-unit';
import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  node_env: env('NODE_ENV', 'development'),
  name: env('APP_NAME', 'buddy-api-service'),
  desc: env('APP_DESC', 'Buddy API service'),
  version: env('APP_VERSION', '1.0.0'),
  port: envNumber('APP_PORT', 8000),
  use_log_queue: envBoolean('USE_LOG_QUEUE', false),
  upload_dir: env('UPLOAD_DIR', './uploads'),
  throttle_ttl: envNumber('THROTTLE_TTL', 60000),
  throttle_limit: envNumber('THROTTLE_LIMIT', 600),
}));
