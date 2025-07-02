/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-09-26 13:56:36
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2024-09-26 16:34:10
 * @FilePath: /buddy-api-service/test/uuid.spec.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { uuid } from '../src/libs/cryptogram';

describe('create uuid', () => {
  it('create uuid', async () => {
    console.log(`field_group_${uuid(true)}`);
  });
});
