import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

import { HealthPlanTemplateService } from '../../src/modules/health-plan/health-plan-template.service';
import { wait } from '../../src/libs/util';

describe('Health Plan Template Test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const project_code = 'proj_96b518e26420419bb9356540ee5565ac';

  it('should create health plan template', async () => {
    const healthPlanTemplateService = app.get(HealthPlanTemplateService);

    const create_health_plan_template_data = {
      project_code,
      template_code: 'SYSTEM_HEALTH_PLAN_TEMPLATE',
      template_name: '系统健康方案模版',
      is_system: 1,
      can_delete: 0,
      add_food_category_relations: [
        {
          food_category_code: 'fc_54171b747b4843958dc6903b0c7a87f2',
          food_category_order: 1,
        },
        {
          food_category_code: 'fc_883dc963086a478db29d945a8471d444',
          food_category_order: 2,
        },
        {
          food_category_code: 'fc_868f9aa69a814e20bb65603c87cf1dec',
          food_category_order: 3,
        },
        {
          food_category_code: 'fc_2ee80bd541d74a86a04ad63f325ae2a7',
          food_category_order: 4,
        },
        {
          food_category_code: 'fc_d5b4a14875a94148bee4b1af76968e30',
          food_category_order: 5,
        },
        {
          food_category_code: 'fc_ad6f5c8381d248119830d4e86240f616',
          food_category_order: 6,
        },
        {
          food_category_code: 'fc_79248056d4ae47b0b7eaf865d63a8cbf',
          food_category_order: 7,
        },
        {
          food_category_code: 'fc_0941877e49fb4a6f8990cf408a4e4eab',
          food_category_order: 8,
        },
        {
          food_category_code: 'fc_0b82a3a793d540f9a66498ff3e7a7d8e',
          food_category_order: 9,
        },
        {
          food_category_code: 'fc_de6fa065d8644fa0b1a1e286008efe54',
          food_category_order: 10,
        },
        {
          food_category_code: 'fc_99b2d38e57b44e8e9985ea9dd8553c00',
          food_category_order: 11,
        },
        {
          food_category_code: 'fc_1af53f9d3bd44abebedf66db0c5511d6',
          food_category_order: 12,
        },
      ],
      add_meal_time_relations: [
        {
          meal_time_code: 'MT_HUNGER',
          meal_time_order: 1,
        },
        {
          meal_time_code: 'MT_BREAKFAST',
          meal_time_order: 2,
        },
        {
          meal_time_code: 'MT_MORNING_SNACK',
          meal_time_order: 3,
        },
        {
          meal_time_code: 'MT_LUNCH',
          meal_time_order: 4,
        },
        {
          meal_time_code: 'MT_AFTERNOON_SNACK',
          meal_time_order: 5,
        },
        {
          meal_time_code: 'MT_DINNER',
          meal_time_order: 6,
        },
        {
          meal_time_code: 'MT_EVENING_SNACK',
          meal_time_order: 7,
        },
        {
          meal_time_code: 'MT_BEFORE_BED_SNACK',
          meal_time_order: 8,
        },
        {
          meal_time_code: 'MT_PRE_WORKOUT',
          meal_time_order: 9,
        },
        {
          meal_time_code: 'MT_AFTER_WORKOUT',
          meal_time_order: 10,
        },
        {
          meal_time_code: 'MT_DAILY_WATER',
          meal_time_order: 11,
        },
      ],
      add_doc_table_relations: [
        {
          doc_table_code: 'DT_DIET_NOTICE_MATTER',
          doc_table_name: '饮食注意事项',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_DIET_NOTICE_MATTER',
              doc_table_head_name: '饮食注意事项',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_DIET_NOTICE_MATTER_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIET_NOTICE_MATTER',
                  content: '饮食注意事项内容',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_FOOD_TYPE_SELECTION_NORMAL',
          doc_table_name: '食物种类选择-常规',
          doc_table_export_name: '您的食物种类选择',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
              doc_table_head_name: '食物类别',
            },
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
              doc_table_head_name: '食物内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '荤菜（任意荤菜，不吃皮即可）',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '蔬菜类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '菌菇类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '水果一份',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '豆类及豆制品',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_6',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '坚果种子类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_7',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '蛋奶类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_NORMAL_8',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_TYPE',
                  content: '油脂类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_NORMAL_CONTENT',
                  content: '食物内容',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_FOOD_TYPE_SELECTION_HIGH_URIC_ACID',
          doc_table_name: '食物种类选择-高尿酸',
          doc_table_export_name: '您的食物种类选择',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
              doc_table_head_name: '食物类别',
            },
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
              doc_table_head_name: '食物内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '荤菜（任意荤菜，不吃皮即可）',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '蔬菜类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '菌菇类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '水果一份',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '豆类及豆制品',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_6',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '坚果种子类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_7',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '蛋奶类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_HIGH_URIC_ACID_8',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_TYPE',
                  content: '油脂类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_HIGH_URIC_ACID_CONTENT',
                  content: '食物内容',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_FOOD_TYPE_SELECTION_THYROIDITIS',
          doc_table_name: '食物种类选择-桥本甲状腺炎',
          doc_table_export_name: '您的食物种类选择',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
              doc_table_head_name: '食物类别',
            },
            {
              doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
              doc_table_head_name: '食物内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '荤菜（任意荤菜，不吃皮即可）',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '蔬菜类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '菌菇类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '水果一份',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '豆类及豆制品',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_6',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '坚果种子类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_7',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '蛋奶类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FOOD_TYPE_SELECTION_THYROIDITIS_8',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_TYPE',
                  content: '油脂类',
                },
                {
                  doc_table_head_code: 'DTH_FOOD_SELECTION_THYROIDITIS_CONTENT',
                  content: '食物内容',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_PERSONALIZED_DIETARY_ADVICE_PUBLIC',
          doc_table_name: '个性化饮食建议-公共',
          doc_table_export_name: '您的个性化饮食建议',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_QUESTION',
              doc_table_head_name: '问题',
            },
            {
              doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_ANSWER',
              doc_table_head_name: '建议',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_QUESTION',
                  content: '三餐餐次比',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_PUBLIC_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_QUESTION',
                  content: '烹调及碳水控制建议',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_PUBLIC_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_QUESTION',
                  content: '优质脂肪建议',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_PUBLIC_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_QUESTION',
                  content: '蔬菜建议',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_PUBLIC_ANSWER',
                  content: '建议',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED',
          doc_table_name: '个性化饮食建议-个性化',
          doc_table_export_name: '您的个性化饮食建议',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
              doc_table_head_name: '问题',
            },
            {
              doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
              doc_table_head_name: '建议',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '高脂血症/冠脉硬化、颈动脉斑块',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '脂肪肝',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '尿酸偏高',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '甲状腺结节',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '高血压3级（极高危）',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_6',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '甲状腺功能减退',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_7',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_QUESTION',
                  content: '慢性胃炎',
                },
                {
                  doc_table_head_code: 'DTH_PERSONALIZED_DIETARY_ADVICE_CUSTOMIZED_ANSWER',
                  content: '建议',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_ONE_DAY_MEAL_ARRANGEMENT_PUBLIC',
          doc_table_name: '一日饮食安排-公用部分',
          doc_table_export_name: '您的一日饮食安排',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_ONE_DAY_MEAL_ARRANGEMENT_PUBLIC',
              doc_table_head_name: '一日饮食安排',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_ONE_DAY_MEAL_ARRANGEMENT_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_ONE_DAY_MEAL_ARRANGEMENT_PUBLIC',
                  content: '早餐',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_DIETARY_PRECAUTIONS_PUBLIC',
          doc_table_name: '饮食注意事项-公用部分',
          doc_table_export_name: '饮食注意事项',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
              doc_table_head_name: '项目',
            },
            {
              doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
              doc_table_head_name: '内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '1',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '2',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '3',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '4',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '5',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_DIETARY_PRECAUTIONS_PUBLIC_6',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_PROJECT',
                  content: '6',
                },
                {
                  doc_table_head_code: 'DTH_DIETARY_PRECAUTIONS_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_FLLOW_UP_PLAN_PUBLIC',
          doc_table_name: '跟踪随访计划-公用部分',
          doc_table_export_name: '跟踪随访计划',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
              doc_table_head_name: '项目',
            },
            {
              doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
              doc_table_head_name: '内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_FLLOW_UP_PLAN_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
                  content: '血糖',
                },
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FLLOW_UP_PLAN_PUBLIC_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
                  content: '体重',
                },
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FLLOW_UP_PLAN_PUBLIC_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
                  content: '腹围',
                },
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FLLOW_UP_PLAN_PUBLIC_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
                  content: '血压',
                },
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_FLLOW_UP_PLAN_PUBLIC_5',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_PROJECT',
                  content: '其他',
                },
                {
                  doc_table_head_code: 'DTH_FLLOW_UP_PLAN_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC',
          doc_table_name: '低血糖的发现与处理-公用部分',
          doc_table_export_name: '低血糖的发现与处理',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_PROJECT',
              doc_table_head_name: '低血糖',
            },
            {
              doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_CONTENT',
              doc_table_head_name: '内容',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_PROJECT',
                  content: '原因',
                },
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_2',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_PROJECT',
                  content: '症状表现',
                },
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_3',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_PROJECT',
                  content: '血糖监测',
                },
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
            {
              doc_table_record_code: 'DTR_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_4',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_PROJECT',
                  content: '处理',
                },
                {
                  doc_table_head_code: 'DTH_LOW_BLOOD_GLUCOSE_DISCOVERY_AND_MANAGEMENT_PUBLIC_CONTENT',
                  content: '',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_COMMON_CAUSES_OF_ELEVATED_FAST_BLOOD_GLUCOSE_PUBLIC',
          doc_table_name: '常见引起空腹血糖升高的原因-公用部分',
          doc_table_export_name: '常见引起空腹血糖升高的原因',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_COMMON_CAUSES_OF_ELEVATED_FAST_BLOOD_GLUCOSE_PUBLIC',
              doc_table_head_name: '常见引起空腹血糖升高的原因',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_COMMON_CAUSES_OF_ELEVATED_FAST_BLOOD_GLUCOSE_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_COMMON_CAUSES_OF_ELEVATED_FAST_BLOOD_GLUCOSE_PUBLIC',
                  content: '常见引起空腹血糖升高的原因',
                },
              ],
            },
          ],
        },
        {
          doc_table_code: 'DT_COMMON_CAUSES_OF_ELEVATED_POSTPRANDIAL_BLOOD_GLUCOSE_PUBLIC',
          doc_table_name: '常见引起餐后血糖升高的原因-公用部分',
          doc_table_export_name: '常见引起餐后血糖升高的原因',
          doc_table_head_relations: [
            {
              doc_table_head_code: 'DTH_COMMON_CAUSES_OF_ELEVATED_POSTPRANDIAL_BLOOD_GLUCOSE_PUBLIC',
              doc_table_head_name: '常见引起餐后血糖升高的原因',
            },
          ],
          doc_table_record_relations: [
            {
              doc_table_record_code: 'DTR_COMMON_CAUSES_OF_ELEVATED_POSTPRANDIAL_BLOOD_GLUCOSE_PUBLIC_1',
              doc_table_record_content: [
                {
                  doc_table_head_code: 'DTH_COMMON_CAUSES_OF_ELEVATED_POSTPRANDIAL_BLOOD_GLUCOSE_PUBLIC',
                  content: '常见引起餐后血糖升高的原因',
                },
              ],
            },
          ],
        },
      ],
    };

    await healthPlanTemplateService.createHealthPlanTemplate(create_health_plan_template_data, null);
  });

  it.skip('query health plan template', async () => {
    const healthPlanTemplateService = app.get(HealthPlanTemplateService);
    const healthPlanTemplate = await healthPlanTemplateService.queryHealthPlanTemplate(
      {
        project_code,
        template_code: 'SYSTEM_HEALTH_PLAN_TEMPLATE',
      } as any,
      null,
    );
    console.log('healthPlanTemplate:', healthPlanTemplate);
  });
});
