/*
 * @Author: leyi leyi@myun.info
 * @Date: 2023-06-09 15:02:33
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-06-05 14:42:43
 * @FilePath: /buddy-api-service/test/user-password.spec.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { encryptPassword } from '../src/libs/cryptogram';

describe('create user password', () => {
  it('create user password', async () => {
    const password = 'Myun@123jx';
    const salt = 'bBEFrzwl';
    const encryptedPassword = encryptPassword(password, salt);
    console.log(`encryptedPassword: ${encryptedPassword}`);
  });
});
