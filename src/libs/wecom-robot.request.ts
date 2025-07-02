/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-08-13 16:41:59
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-07-02 14:29:12
 * @FilePath: /buddy-api-service/src/libs/wecom-robot.request.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import * as crypto from 'crypto-js';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

export class WecomRobotRequest {
  private httpService: HttpService;
  constructor(private base_url: string) {
    this.httpService = new HttpService();
  }

  private sign({ data, url }: { data: any; url: string }) {
    const new_data = { ...data, timestamp: Date.now() };
    const sign = crypto.MD5(`${JSON.stringify(new_data)}${url}`);
    new_data.sign = crypto.AES.encrypt(sign.toString().toUpperCase(), url).toString();

    return new_data;
  }

  async post({ url, request_data }: { url: string; request_data: any }): Promise<AxiosResponse<any>> {
    try {
      console.log(`[ProjectRequest] request ${url}: `, JSON.stringify(request_data, null, 2));
      const sign_data = this.sign({ data: request_data, url });
      const res = await this.httpService.axiosRef({
        method: 'post',
        url,
        data: sign_data,
        headers: {
          'x-from-source': 'deep-ai-health-project',
          'Content-Type': 'application/json',
        },
        baseURL: this.base_url,
      });
      const { code, msg, data } = res.data;
      if (code !== 0) {
        throw new Error(msg);
      }
      console.log(`[ProjectRequest] response ${url}: `, JSON.stringify(data, null, 2));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        const status = axiosError.response?.status;
        const errorMessage = axiosError.response?.data?.msg || axiosError.message;
        const requestUrl = axiosError.config?.url;

        let errorDetail = `请求错误: ${errorMessage}`;
        if (status) errorDetail += ` (状态码: ${status})`;
        if (requestUrl) errorDetail += ` [URL: ${requestUrl}]`;

        if (axiosError.code === 'ECONNABORTED') {
          errorDetail = '请求超时，请稍后重试';
        } else if (axiosError.code === 'ECONNREFUSED') {
          errorDetail = '请求被拒绝，请稍后重试';
        } else if (!axiosError.response) {
          errorDetail = '网络错误，请检查网络连接';
        }

        throw new Error(errorDetail);
      } else {
        const genericError = error as Error;
        throw new Error(`未知错误: ${genericError.message}`);
      }
    }
  }
}
