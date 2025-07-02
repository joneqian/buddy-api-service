/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-09-23 14:39:47
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2024-09-27 11:07:11
 * @FilePath: /buddy-api-service/src/libs/ali-nls.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Core from '@alicloud/pop-core';

export class AliyunNls {
  private nlsClient;
  constructor(config: {
    access_key_id: string;
    access_key_secret: string;
    end_point: string;
    api_version: string;
  }) {
    this.createClient(config);
  }
  createClient(config: {
    access_key_id: string;
    access_key_secret: string;
    end_point: string;
    api_version: string;
  }): any {
    if (this.nlsClient) {
      return this.nlsClient;
    }
    this.nlsClient = new Core({
      accessKeyId: config.access_key_id,
      accessKeySecret: config.access_key_secret,
      endpoint: config.end_point,
      apiVersion: config.api_version,
    });
    return this.nlsClient;
  }
  async getToken(): Promise<any> {
    const result = await this.nlsClient.request('CreateToken');
    return result;
  }
}
