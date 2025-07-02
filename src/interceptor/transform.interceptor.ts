/*
 * @Author: leyi leyi@myun.info
 * @Date: 2021-11-25 17:08:33
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2023-07-24 16:44:15
 * @FilePath: /buddy-api-service/src/interceptor/transform.interceptor.ts
 * @Description:
 *
 * Copyright (c) 2022 by leyi leyi@myun.info, All Rights Reserved.
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OkResponse } from '@libs/util';
import { envBoolean, env } from '@libs/env-unit';
import { apiCipher, uuid } from '@libs/cryptogram';
const API_CIPHER_ENABLE = envBoolean('API_CIPHER_ENABLE', false);
const API_CIPHER_KEY = env('API_CIPHER_KEY', 'myun.info');
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const request_id = uuid();
    req.body.request_id = request_id;
    req.query.request_id = request_id;
    const responseFun = Reflect.getMetadata('OkResponse', context.getHandler());
    const weiTaiResPosneFun = Reflect.getMetadata(
      'weiTaiOkResponse',
      context.getHandler(),
    );
    return next.handle().pipe(
      map((data) => {
        if (req.body && req.body.ef_author) {
          data.ef_author = 'qian.qing@aliyun.com';
        }
        res.status(HttpStatus.OK);
        if (API_CIPHER_ENABLE) {
          data = apiCipher(data, API_CIPHER_KEY);
        }
        if (responseFun) {
          if (typeof data === 'string') {
            return data;
          }
          return { ...responseFun(data), request_id };
        } else if (weiTaiResPosneFun) {
          return { ...weiTaiResPosneFun(data) };
        } else {
          return { ...OkResponse(data), request_id };
        }
      }),
    );
  }
}
