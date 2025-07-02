-- 新项目code
SET @new_project_code = '待定';
SET @new_company_code = '待定';

-- 基础版本
SET @old_company_code = 'proj_personal_free_edition_template';
SET @old_project_code = 'comp_personal_free_edition_template'; 

-- 复制权限
insert into t_project_permission
select null,@new_company_code company_code,@new_project_code AS project_code,
permission_code,parent_permission_code,permission_name,permission_description,
permission_type,permission_status,resource_type,resource_identifier,
resource_action,additional_conditions,NOW() AS created_at,NOW() AS updated_at,created_by,
updated_by,deleted_at
 from t_project_permission 
 where company_code=@old_company_code and project_code=@old_project_code
-- 复制字段  基本信息、血糖日志、饮食日志
insert into t_project_field
select DISTINCT  NULL as id,  @new_project_code  as project_code,field_code, global_field_code, 
global_field_name, custom_name, field_type, value_type, field_status, 
default_value, help_text, validation_rules, field_properties, extended_properties,
 unit, reference_range, calculation_type, calculation_expression, dependent_fields,
  is_system, is_static, can_delete, NOW() AS created_at, NOW() AS updated_at, created_by, updated_by, deleted_at 
 from t_project_field
 WHERE  deleted_at is null and project_code = @old_project_code
-- 复制表单 基本信息、血糖日志、饮食日志
insert into t_project_form
select  NULL as id,  @new_project_code  as project_code,
 form_code, global_form_code, global_form_name, form_name, form_description, form_status, is_system, can_delete, NOW() AS created_at, NOW() AS updated_at, created_by, updated_by, deleted_at
 from t_project_form
 WHERE  deleted_at is null and form_code 
 in('form_food_log','form_customer_basic_info','form_blood_glucose_log')
and project_code = @old_project_code

insert into t_project_form_field_relation
select  NULL as id,  @new_project_code  as project_code,
 form_code, field_code, field_order, is_required, custom_field_name, validation_rules, 
 can_delete, NOW() AScreated_at,NOW() AS updated_at, created_by, updated_by, deleted_at
 from t_project_form_field_relation
 WHERE  deleted_at is null and form_code 
 in('form_food_log','form_customer_basic_info','form_blood_glucose_log')
and project_code = @old_project_code
-- 任务模板

-- 服务包

-- 复制饮食健康方案
insert into t_food
select  NULL as id,  @new_project_code  as project_code,
 food_code, food_name, food_unit, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _food  WHERE  deleted_at is null and project_code = @old_project_code;

insert into t_food_category
select  NULL as id,  @new_project_code  as project_code,
 category_code, category_name, category_description, category_order, 
 NOW() AS created_at, NOW() AS updated_at, created_by,
  updated_by, deleted_at
from _food_category  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_food_category_relation
select  NULL as id,  @new_project_code  as project_code,
 food_code, food_category_code, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _food_category_relation  WHERE  deleted_at is null and project_code = @old_project_code;

insert into t_food_meal_time
select  NULL as id,  @new_project_code  as project_code,
 meal_time_code, meal_time_name, meal_time_order, is_main_meal, 
 NOW() AS created_at, NOW() AS updated_at, created_by,
  updated_by, deleted_at
from _food_meal_time  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_food_meal_time_relation
select  NULL as id,  @new_project_code  as project_code,
 food_code, meal_time_code, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _food_meal_time_relation  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_food_nutrition
select  NULL as id,  @new_project_code  as project_code,
 food_code, carbohydrate, protein, fat, fiber, vitamin_a, vitamin_c, vitamin_e, calcium, iron, zinc,
  quantity, unit, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _food_nutrition  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_health_plan_template
select  NULL as id,  @new_project_code  as project_code,
 health_plan_template_code, health_plan_template_name, is_system, can_delete, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _health_plan_template  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_health_plan_template_food_category_relation
select  NULL as id,  @new_project_code  as project_code,
 health_plan_template_code, food_category_code, food_category_order, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _health_plan_template_food_category_relation  WHERE  deleted_at is null and project_code = @old_project_code;

insert into t_health_plan_template_meal_time_relation
select  NULL as id,  @new_project_code  as project_code,
 health_plan_template_code, meal_time_code, meal_time_order, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _health_plan_template_meal_time_relation  WHERE  deleted_at is null and project_code = @old_project_code;


insert into t_health_plan_template_rule
select  NULL as id,  @new_project_code  as project_code,
 rule_code, rule_name, rule_type, form_code, field_code, required, sort, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _health_plan_template_rule  WHERE  deleted_at is null and project_code = @old_project_code;

insert into t_health_plan_template_rule_value
select  NULL as id,  @new_project_code  as project_code,
 rule_code, value_code, value_name, range_start, range_end, sort, NOW() AS  created_at,NOW() AS  updated_at, created_by, updated_by, deleted_at
from _health_plan_template_rule_value  WHERE  deleted_at is null and project_code = @old_project_code;


