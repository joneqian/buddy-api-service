/*
 * @Author: leyi leyi@myun.info
 * @Date: 2023-03-10 17:55:55
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2024-08-13 19:37:25
 * @FilePath: /buddy-api-service/src/filter/any-exception.filter.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 捕获所有异常
 */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { LoggerFactory } from '@libs/log4js';
import { ErrorResponse, WeiTaiErrorResponse } from '@libs/util';
import { ResponseCode } from '@config/global';

const logger = LoggerFactory.getInstance();
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception.message;

    const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception.toString()} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    `;
    logger.error(logFormat);

    const errorResponse = ErrorResponse(ResponseCode.SYS_ERROR, message);
    response.status(200);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send({
      ...errorResponse,
      request_id: request.body.request_id || request.query.request_id,
    });
  }
}

// 维泰的异常过滤器
@Catch()
export class WeiTaiExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception.message;
    console.log('message: ', message);

    const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception.toString()} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    `;
    logger.error(logFormat);

    const errorResponse = WeiTaiErrorResponse(message);
    response.status(200);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send({
      ...errorResponse,
    });
  }
}
