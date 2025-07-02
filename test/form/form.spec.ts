/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-09-20 16:54:01
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-03-12 09:38:17
 * @FilePath: /buddy-api-service/test/form/form.spec.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

import { FormService } from '../../src/modules/form/form.service';

describe('Field Test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it.skip('create form', async () => {
    const formService = app.get(FormService);
    const field_code_list = ['field_PE_report_attachment', 'field_PE_report_time', 'field_PE_report_name'];
    const form_field_relations = [];
    let start_order = 1;
    for (const field_code of field_code_list) {
      const field_list = await formService.queryField(
        {
          project_code: 'proj_96b518e26420419bb9356540ee5565ac',
          field_code,
        } as any,
        null,
      );
      const field = field_list[0];
      if (!field) {
        continue;
      }
      form_field_relations.push({
        field_code,
        field_order: start_order,
        is_required: 0,
        custom_field_name: field.custom_name,
        validation_rules: field.validation_rules,
        can_delete: 0,
      });
      start_order++;
    }
    const result = await formService.createForm(
      {
        project_code: 'proj_96b518e26420419bb9356540ee5565ac',
        form_code: 'form_PE_report_log',
        global_form_code: 'form_PE_report_log',
        global_form_name: '体检日志',
        form_name: '体检日志',
        form_description: '用于收集用户体检日志',
        form_status: 1,
        is_system: 1,
        can_delete: 0,
        form_field_relations,
      } as any,
      null,
    );
    console.log(result);
    console.log('done');
  });

  it.skip('update form', async () => {
    const formService = app.get(FormService);
    const field_code_list = [
      'field_diabetes_complications',
      'field_glycated_hemoglobin',
      'field_current_BG_2h_after_meal',
      'field_current_FBG',
    ];
    const add_form_field_relations = [];
    let start_order = 1;
    for (const field_code of field_code_list) {
      const field_list = await formService.queryField(
        {
          project_code: 'proj_96b518e26420419bb9356540ee5565ac',
          field_code,
        } as any,
        null,
      );
      const field = field_list[0];
      if (!field) {
        continue;
      }
      add_form_field_relations.push({
        field_code,
        field_order: start_order,
        is_required: 0,
        custom_field_name: field.custom_name,
        validation_rules: field.validation_rules,
        can_delete: 0,
      });

      start_order++;
    }
    const result = await formService.updateForm(
      {
        project_code: 'proj_96b518e26420419bb9356540ee5565ac',
        form_code: 'form_customer_basic_info',
        add_form_field_relations,
      } as any,
      null,
    );
    console.log(result);
    console.log('done');
  });
});
