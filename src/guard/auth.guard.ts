/*
 * @Author: leyi leyi@myun.info
 * @Date: 2021-11-25 17:08:33
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-04 11:57:02
 * @FilePath: /buddy-api-service/src/guard/auth.guard.ts
 * @Description:
 *
 * Copyright (c) 2022 by leyi leyi@myun.info, All Rights Reserved.
 */
import { Injectable, CanActivate, HttpException, HttpStatus, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '@service/cache.service';
import { md5 } from '@libs/cryptogram';
import { CacheKey } from '@config/global';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly cacheService: CacheService,
    private readonly configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { headers, path: url, session, body } = request;
    let { user } = session;
    let { authToken } = session;

    // if (
    //   !body.project_code &&
    //   !user.project_code &&
    //   !headers['x-project-code']
    // ) {
    //   throw new HttpException('缺少project_code', HttpStatus.UNAUTHORIZED);
    // }

    if (headers['x-from-source'] === 'swagger') {
      return true;
    }
    // 微信公众号的接口请求不需要验证
    if (headers['x-from-source'] === 'wechat-h5') {
      return true;
    }

    // 企微机器人请求不需要验证
    if (headers['x-from-source'] === 'wecom-robot') {
      return true;
    }
    // 如果白名单里面有的url就不拦截
    if (this.hasUrl(this.configService.get('while_list.token'), url)) {
      return true;
    }

    if (headers['x-from-source'] === 'deep-ai-health-platform') {
      if (!headers['x-company-app-key']) {
        throw new HttpException('缺少公司appKey', HttpStatus.UNAUTHORIZED);
      }

      const companyConfigCache = await this.cacheService.get(`${CacheKey.COMPANY_CONFIG}:${headers['x-company-app-key']}`);
      if (!companyConfigCache) {
        throw new HttpException('公司配置不存在', HttpStatus.UNAUTHORIZED);
      }

      return true;
    }

    if (headers['x-auth-token']) {
      authToken = headers['x-auth-token'];
      user = await this.cacheService.get(`${CacheKey.SESSION_USER}_${authToken}`);
      if (user) {
        user = JSON.parse(user);
        session.user = user;
      } else {
        throw new HttpException('用户未登录', HttpStatus.UNAUTHORIZED);
      }
    }
    if (!authToken) {
      throw new HttpException('缺少authToken', HttpStatus.UNAUTHORIZED);
    }
    const session_key = this.configService.get('session.key');
    const token_str = `${session_key}${JSON.stringify({
      id: user.id,
      code: user.code,
    })}${session_key}`;
    const token = md5(token_str).toString();
    if (authToken !== token) {
      throw new HttpException('authToken错误', HttpStatus.UNAUTHORIZED);
    }
    // 直接把session中的project_code和company_code写入body
    if (!body.project_code) {
      body.project_code = user.project_code || headers['x-project-code'];
    }
    if (!body.company_code) {
      body.company_code = user.company_code || headers['x-company-code'];
    }
    return true;
  }

  /**
   * @param {string[]} urlList url列表
   * @param {url} url 当前要判断的url列表
   * @return:
   * @Description: 判断一个url列表中是否包含一个url
   * @Author: qian.qing@aliyun.com
   * @LastEditors: qian.qing@aliyun.com
   * @Date: 2020-08-15 14:28:11
   */
  private hasUrl(urlList: string[], url: string): boolean {
    let flag = false;
    for (const item of urlList) {
      if (Object.is(item.replace(/\//gi, ''), url.replace(/\//gi, ''))) {
        flag = true;
      }
    }
    return flag;
  }
}
