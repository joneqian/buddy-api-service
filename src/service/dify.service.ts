/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-01-21 09:41:56
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-01-21 16:05:21
 * @FilePath: /buddy-api-service/src/service/dify.service.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DifyService {
  private dify_url: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.dify_url = this.configService.get('dify.url');
  }

  async createDocSegments({
    api_key,
    dataset_id,
    document_id,
    segments,
  }: {
    api_key: string;
    dataset_id: string;
    document_id: string;
    segments: Array<{ content: string }>;
  }) {
    try {
      const url = `${this.dify_url}/datasets/${dataset_id}/documents/${document_id}/segments`;
      const headers = {
        Authorization: `Bearer ${api_key}`,
        'Content-Type': 'application/json',
      };
      const data = {
        segments,
      };
      const res = await this.httpService.axiosRef.post(url, data, { headers, timeout: 60000 });
      return res.data;
    } catch (error) {
      console.error(`createDocSegments error: ${error}`);
    }
  }

  async updateDocSegments({
    api_key,
    dataset_id,
    document_id,
    segment_id,
    content,
  }: {
    api_key: string;
    dataset_id: string;
    document_id: string;
    segment_id: string;
    content: string;
  }) {
    try {
      const url = `${this.dify_url}/datasets/${dataset_id}/documents/${document_id}/segments/${segment_id}`;
      const headers = {
        Authorization: `Bearer ${api_key}`,
        'Content-Type': 'application/json',
      };
      const data = {
        segment: { content },
      };
      const res = await this.httpService.axiosRef.post(url, data, { headers, timeout: 60000 });
      return res.data;
    } catch (error) {
      console.error(`updateDocSegments error: ${error}`);
    }
  }

  async deleteDocSegments({
    api_key,
    dataset_id,
    document_id,
    segment_id_list,
  }: {
    api_key: string;
    dataset_id: string;
    document_id: string;
    segment_id_list: Array<string>;
  }) {
    for (const segment_id of segment_id_list) {
      try {
        const url = `${this.dify_url}/datasets/${dataset_id}/documents/${document_id}/segments/${segment_id}`;
        const headers = {
          Authorization: `Bearer ${api_key}`,
          'Content-Type': 'application/json',
        };
        await this.httpService.axiosRef.delete(url, { headers });
      } catch (error) {
        console.error(`deleteDocSegments error: ${error}`);
      }
    }
  }
}
