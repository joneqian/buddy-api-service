/*
 * @Author: leyi leyi@myun.info
 * @Date: 2025-03-04 18:02:28
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-03-07 21:50:31
 * @FilePath: /buddy-api-service/test/invitation-code.spec.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { generateInvitationCode } from '../src/libs/util';

describe('invitation code', () => {
  it('create invitation code', async () => {
    for (let i = 0; i < 10; i++) {
      console.log(`invitation code: ${generateInvitationCode('cust_11b4910bea9a49e58a3b45a20ba93403')}`);
    }
  });
});
