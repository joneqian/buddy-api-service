import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

import { FoodService } from '../../src/modules/food/food.service';
import { wait } from '../../src/libs/util';

describe('Food Test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const project_code = 'proj_personal_free_edition_template';

  it.skip('create food category', async () => {
    const foodService = app.get(FoodService);
    const food_categorys = [
      {
        food_category_code: 'fc_grain_and_starch',
        food_category_name: '谷薯类',
        food_category_order: 1,
      },
      {
        food_category_code: 'fc_milk_and_dairy_products',
        food_category_name: '奶类及奶制品',
        food_category_order: 2,
      },
      {
        food_category_code: 'fc_egg',
        food_category_name: '蛋类',
        food_category_order: 3,
      },
      {
        food_category_code: 'fc_bean',
        food_category_name: '豆类',
        food_category_order: 4,
      },
      {
        food_category_code: 'fc_meat_egg_bean',
        food_category_name: '肉、蛋、豆',
        food_category_order: 5,
      },
      {
        food_category_code: 'fc_non_starch_vegetables',
        food_category_name: '非淀粉蔬菜类',
        food_category_order: 6,
      },
      {
        food_category_code: 'fc_low_sugar_fruit',
        food_category_name: '低糖水果',
        food_category_order: 7,
      },
      {
        food_category_code: 'fc_nut',
        food_category_name: '坚果',
        food_category_order: 8,
      },
      {
        food_category_code: 'fc_oil',
        food_category_name: '油脂',
        food_category_order: 9,
      },
    ];

    let category_order = 1;
    for (const food_category of food_categorys) {
      const { food_category_code, food_category_name, food_category_order } = food_category;
      await foodService.createFoodCategory(
        {
          project_code,
          category_code: food_category_code,
          category_name: food_category_name,
          category_order: food_category_order || category_order,
        } as any,
        null,
      );
      category_order++;
    }
  });

  it.skip('create food', async () => {
    const foodService = app.get(FoodService);

    const food_list = [
      { food_code: 'food_tubers', food_name: '薯类', food_unit: 'g' },
      { food_code: 'food_multi_grain_rice_or_noodles', food_name: '杂粮饭或杂粮面', food_unit: 'g' },
      { food_code: 'food_white_rice', food_name: '白米饭', food_unit: 'g' },
      { food_code: 'food_no_sugar_yogurt_or_soy_milk_or_milk', food_name: '无糖酸奶或无糖豆浆或牛奶', food_unit: 'ml' },
      { food_code: 'food_meat_dishes', food_name: '荤菜', food_unit: 'g' },
      { food_code: 'food_egg', food_name: '鸡蛋', food_unit: '个' },
      { food_code: 'food_soy_products', food_name: '豆制品', food_unit: 'g' },
      { food_code: 'food_vegetables', food_name: '蔬菜', food_unit: 'g' },
      { food_code: 'food_fruit', food_name: '水果', food_unit: 'g' },
      { food_code: 'food_nut', food_name: '坚果', food_unit: 'g' },
      { food_code: 'food_oil', food_name: '食用油', food_unit: 'ml' },
      { food_code: 'food_avocado', food_name: '牛油果', food_unit: 'g' },
      { food_code: 'food_dark_chocolate', food_name: '黑巧克力', food_unit: 'g' },
      { food_code: 'food_wheat_germ', food_name: '小麦胚芽', food_unit: 'g' },
      { food_code: 'food_protein', food_name: '蛋白', food_unit: '个' },
    ];

    for (const food of food_list) {
      await foodService.createFood(
        {
          project_code,
          food_code: food.food_code,
          food_name: food.food_name,
          food_unit: food.food_unit,
        } as any,
        null,
      );
    }
  });

  it.skip('create food nutrition', async () => {
    const foodService = app.get(FoodService);

    const { rows: all_foods } = await foodService.queryFoods(
      {
        project_code,
        page_num: 1,
        page_size: 100,
      } as any,
      null,
    );

    const food_nutrition_list = [
      {
        food_name: '薯类',
        carbohydrate: 10.0,
        protein: 1.0,
        fat: 0.0,
        quantity: 50,
        unit: 'g',
      },
      {
        food_name: '杂粮饭或杂粮面',
        carbohydrate: 16.0,
        protein: 2.0,
        fat: 0.0,
        quantity: 25,
        unit: 'g',
      },
      {
        food_name: '白米饭',
        carbohydrate: 20.0,
        protein: 2.0,
        fat: 0.0,
        quantity: 25,
        unit: 'g',
      },
      {
        food_name: '无糖酸奶或无糖豆浆或牛奶',
        carbohydrate: 7.5,
        protein: 7.0,
        fat: 7.0,
        quantity: 200,
        unit: 'ml',
      },
      {
        food_name: '荤菜',
        carbohydrate: 0.0,
        protein: 9.0,
        fat: 6.0,
        quantity: 50,
        unit: 'g',
      },
      {
        food_name: '鸡蛋',
        carbohydrate: 0.0,
        protein: 7.0,
        fat: 5.0,
        quantity: 1,
        unit: '个',
      },
      {
        food_name: '豆制品',
        carbohydrate: 8.5,
        protein: 9.0,
        fat: 4.0,
        quantity: 25,
        unit: 'g',
      },
      {
        food_name: '蔬菜',
        carbohydrate: 17.0,
        protein: 5.0,
        fat: 0.0,
        quantity: 500,
        unit: 'g',
      },
      {
        food_name: '水果',
        carbohydrate: 21.0,
        protein: 1.0,
        fat: 0.0,
        quantity: 200,
        unit: 'g',
      },
      {
        food_name: '坚果',
        carbohydrate: 3.3,
        protein: 6.7,
        fat: 13.0,
        quantity: 25,
        unit: 'g',
      },
      {
        food_name: '食用油',
        carbohydrate: 0.0,
        protein: 0.0,
        fat: 1.0,
        quantity: 1,
        unit: 'ml',
      },
      {
        food_name: '牛油果',
        carbohydrate: 7.4,
        protein: 2.0,
        fat: 15.3,
        quantity: 100,
        unit: 'g',
      },
      {
        food_name: '黑巧克力',
        carbohydrate: 2.5,
        protein: 0.4,
        fat: 2.0,
        quantity: 5,
        unit: 'g',
      },
      {
        food_name: '小麦胚芽',
        carbohydrate: 30.6,
        protein: 33.6,
        fat: 11.6,
        quantity: 100,
        unit: 'g',
      },
      {
        food_name: '蛋白',
        carbohydrate: 0.9,
        protein: 3.5,
        fat: 0,
        quantity: 1,
        unit: '个',
      },
    ];

    for (const food_nutrition of food_nutrition_list) {
      const { food_name, ...nutrition } = food_nutrition;

      const food = all_foods.find((food) => food.food_name === food_name);
      if (!food) {
        console.error('food not found', food_name);
        continue;
      }

      await foodService.createFoodNutrition(
        {
          project_code,
          food_code: food.food_code,
          ...nutrition,
        } as any,
        null,
      );
    }
  });

  it.skip('create food and food category relation', async () => {
    const foodService = app.get(FoodService);
    const relation_list = [
      {
        food_category_code: 'fc_grain_and_starch',
        food_code_list: ['food_tubers', 'food_multi_grain_rice_or_noodles', 'food_white_rice', 'food_wheat_germ'],
      },
      {
        food_category_code: 'fc_milk_and_dairy_products',
        food_code_list: ['food_no_sugar_yogurt_or_soy_milk_or_milk', 'food_dark_chocolate'],
      },
      {
        food_category_code: 'fc_egg',
        food_code_list: ['food_egg', 'food_protein'],
      },
      {
        food_category_code: 'fc_bean',
        food_code_list: ['food_soy_products'],
      },
      {
        food_category_code: 'fc_meat_egg_bean',
        food_code_list: ['food_meat_dishes', 'food_egg', 'food_protein', 'food_soy_products'],
      },
      {
        food_category_code: 'fc_non_starch_vegetables',
        food_code_list: ['food_vegetables'],
      },
      {
        food_category_code: 'fc_low_sugar_fruit',
        food_code_list: ['food_fruit', 'food_avocado'],
      },
      {
        food_category_code: 'fc_nut',
        food_code_list: ['food_nut'],
      },
      {
        food_category_code: 'fc_oil',
        food_code_list: ['food_oil'],
      },
    ];

    for (const relation of relation_list) {
      const { food_category_code, food_code_list } = relation;
      await foodService.updateFoodCategoryRelation(
        {
          project_code,
          food_category_code,
          add_food_code_list: food_code_list,
        } as any,
        null,
      );
    }
  });

  it('create food and food meal_time relation', async () => {
    const foodService = app.get(FoodService);
    const relation_list = [
      {
        meal_time_code: 'MT_BREAKFAST',
        food_code_list: [
          'food_tubers',
          'food_multi_grain_rice_or_noodles',
          'food_wheat_germ',
          'food_white_rice',
          'food_no_sugar_yogurt_or_soy_milk_or_milk',
          'food_dark_chocolate',
          'food_egg',
          'food_protein',
          'food_soy_products',
          'food_meat_dishes',
          'food_vegetables',
          'food_fruit',
          'food_avocado',
          'food_nut',
          'food_oil',
        ],
      },
      {
        meal_time_code: 'MT_LUNCH',
        food_code_list: [],
      },
      {
        meal_time_code: 'MT_DINNER',
        food_code_list: [],
      },
    ];

    for (const relation of relation_list) {
      const { meal_time_code, food_code_list } = relation;
      await foodService.updateFoodMealTimeRelation(
        {
          project_code,
          meal_time_code,
          add_food_code_list: food_code_list,
        } as any,
        null,
      );
      // await wait(4000);
    }
  }, 240000);
});
