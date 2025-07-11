const content = [
  {
    id: 1,
    field_code: 'field_height',
    default_name: '身高',
    custom_name: '身高',
    field_type: 'Input',
    value_type: 'Integer',
    field_status: 1,
    default_value: 0,
    help_text: '请输入身高（单位：厘米）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'cm',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 14:19:24',
    updated_at: '2024/8/15 15:10:08',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 2,
    field_code: 'field_sex',
    default_name: '性别',
    custom_name: '性别',
    field_type: 'Select',
    value_type: 'String',
    field_status: 1,
    default_value: 男,
    help_text: '请选择性别',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 14:43:26',
    updated_at: '2024/8/15 14:43:26',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 3,
    field_code: 'field_real_name',
    default_name: '姓名',
    custom_name: '姓名',
    field_type: 'Input',
    value_type: 'String',
    field_status: 1,
    default_value: 0,
    help_text: '请输入姓名',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 4,
    field_code: 'field_mobile',
    default_name: '手机号',
    custom_name: '手机号',
    field_type: 'Input',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入手机号',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 5,
    field_code: 'field_nation',
    default_name: '民族',
    custom_name: '民族',
    field_type: 'Select',
    value_type: 'String',
    field_status: 1,
    default_value: 汉族,
    help_text: '请选择民族',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 6,
    field_code: 'field_birthday',
    default_name: '出生年月',
    custom_name: '出生年月',
    field_type: 'Date',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择出生年月',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 7,
    field_code: 'field_age',
    default_name: '年龄',
    custom_name: '年龄',
    field_type: 'Input',
    value_type: 'Integer',
    field_status: 1,
    default_value: null,
    help_text: '请输入年龄',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'simple',
    calculation_expression:
      'const { field_birthday } = args;const birthDate = new Date(field_birthday);const age = new Date().getFullYear() - birthDate.getFullYear();return age;',
    dependent_fields: [],
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 8,
    field_code: 'field_address',
    default_name: '常住地址',
    custom_name: '常住地址',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入常住地址',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 9,
    field_code: 'field_hyperglycemia_date',
    default_name: '何时发现高血糖',
    custom_name: '何时发现高血糖',
    field_type: 'Date',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择发现高血糖日期',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 10,
    field_code: 'field_hyperglycemia_keep',
    default_name: '糖龄',
    custom_name: '糖龄',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: null,
    help_text: '请输入糖龄',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 11,
    field_code: 'field_is_DM',
    default_name: '是否确诊为糖尿病',
    custom_name: '是否确诊为糖尿病',
    field_type: 'Select',
    value_type: 'String',
    field_status: 1,
    default_value: 否,
    help_text: '请选择是否确诊为糖尿病',
    validation_rules: '[]',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 12,
    field_code: 'field_current_medication',
    default_name: '目前用药',
    custom_name: '目前用药',
    field_type: 'Select',
    value_type: 'String',
    field_status: 1,
    default_value: 否,
    help_text: '请选择目前用药',
    validation_rules: '[]',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 1,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1000,
    field_code: 'field_fasting_measure_time',
    default_name: '空腹测量时间',
    custom_name: '空腹测量时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择空腹测量时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1001,
    field_code: 'field_FBG',
    default_name: '空腹血糖值',
    custom_name: '空腹血糖值',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: 0,
    help_text: '请输入空腹血糖值（单位：mmol/l）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'mmol/l',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1002,
    field_code: 'field_FBG_remark',
    default_name: '空腹备注',
    custom_name: '空腹备注',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入空腹备注',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1003,
    field_code: 'field_FBG_attachment',
    default_name: '空腹附件',
    custom_name: '空腹附件',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传空腹附件',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1004,
    field_code: 'field_measure_time_after_breakfast',
    default_name: '早餐后测量时间',
    custom_name: '早餐后测量时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择早餐后测量时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1005,
    field_code: 'field_FBG_after_breakfast',
    default_name: '早餐后血糖值',
    custom_name: '早餐后血糖值',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: 0,
    help_text: '请输入早餐后血糖值（单位：mmol/l）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'mmol/l',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1006,
    field_code: 'field_FBG_remark_after_breakfast',
    default_name: '早餐后备注',
    custom_name: '早餐后备注',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入早餐后备注',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1007,
    field_code: 'field_FBG_attachment_after_breakfast',
    default_name: '早餐后附件',
    custom_name: '早餐后附件',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传早餐后附件',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1008,
    field_code: 'field_measure_time_after_lunch',
    default_name: '午餐后测量时间',
    custom_name: '午餐后测量时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择午餐后测量时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1009,
    field_code: 'field_FBG_after_lunch',
    default_name: '午餐后血糖值',
    custom_name: '午餐后血糖值',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: 0,
    help_text: '请输入午餐后血糖值（单位：mmol/l）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'mmol/l',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1010,
    field_code: 'field_FBG_remark_after_lunch',
    default_name: '午餐后备注',
    custom_name: '午餐后备注',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入午餐后备注',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1011,
    field_code: 'field_FBG_attachment_after_lunch',
    default_name: '午餐后附件',
    custom_name: '午餐后附件',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传午餐后附件',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1012,
    field_code: 'field_measure_time_after_dinner',
    default_name: '晚餐后测量时间',
    custom_name: '晚餐后测量时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择晚餐后测量时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1013,
    field_code: 'field_FBG_after_dinner',
    default_name: '晚餐后血糖值',
    custom_name: '晚餐后血糖值',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: 0,
    help_text: '请输入晚餐后血糖值（单位：mmol/l）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'mmol/l',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1014,
    field_code: 'field_FBG_remark_after_dinner',
    default_name: '晚餐后备注',
    custom_name: '晚餐后备注',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入晚餐后备注',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1015,
    field_code: 'field_FBG_attachment_after_dinner',
    default_name: '晚餐后附件',
    custom_name: '晚餐后附件',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传晚餐后附件',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1016,
    field_code: 'field_measure_time_any_time',
    default_name: '随机测量时间',
    custom_name: '随机测量时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择随机测量时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1017,
    field_code: 'field_FBG_any_time',
    default_name: '随机血糖值',
    custom_name: '随机血糖值',
    field_type: 'Input',
    value_type: 'Float',
    field_status: 1,
    default_value: 0,
    help_text: '请输入随机血糖值（单位：mmol/l）',
    validation_rules: '[{',
    field_properties: '{',
    unit: 'mmol/l',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1018,
    field_code: 'field_FBG_remark_any_time',
    default_name: '随机备注',
    custom_name: '随机备注',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入随机备注',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1019,
    field_code: 'field_FBG_attachment_any_time',
    default_name: '随机附件',
    custom_name: '随机附件',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传随机附件',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1020,
    field_code: 'field_food_breakfast_time',
    default_name: '早餐记录时间',
    custom_name: '早餐记录时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择早餐记录时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1021,
    field_code: 'field_food_breakfast_image',
    default_name: '早餐配图',
    custom_name: '早餐配图',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传早餐配图',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1022,
    field_code: 'field_food_breakfast_comment',
    default_name: '早餐用户留言',
    custom_name: '早餐用户留言',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入早餐用户留言',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1023,
    field_code: 'field_food_breakfast_log',
    default_name: '早餐饮食记录',
    custom_name: '早餐饮食记录',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入早餐饮食记录',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1024,
    field_code: 'field_food_lunch_time',
    default_name: '午餐记录时间',
    custom_name: '午餐记录时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择午餐记录时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1025,
    field_code: 'field_food_lunch_image',
    default_name: '午餐配图',
    custom_name: '午餐配图',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传午餐配图',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1026,
    field_code: 'field_food_lunch_comment',
    default_name: '午餐用户留言',
    custom_name: '午餐用户留言',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入午餐用户留言',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1027,
    field_code: 'field_food_lunch_log',
    default_name: '午餐饮食记录',
    custom_name: '午餐饮食记录',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入午餐饮食记录',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1028,
    field_code: 'field_food_dinner_time',
    default_name: '晚餐记录时间',
    custom_name: '晚餐记录时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择晚餐记录时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1029,
    field_code: 'field_food_dinner_image',
    default_name: '晚餐配图',
    custom_name: '晚餐配图',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传晚餐配图',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1030,
    field_code: 'field_food_dinner_comment',
    default_name: '晚餐用户留言',
    custom_name: '晚餐用户留言',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入晚餐用户留言',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1031,
    field_code: 'field_food_dinner_log',
    default_name: '晚餐饮食记录',
    custom_name: '晚餐饮食记录',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入晚餐饮食记录',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1032,
    field_code: 'field_food_any_time',
    default_name: '其他记录时间',
    custom_name: '其他记录时间',
    field_type: 'DateTime',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请选择其他记录时间',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1033,
    field_code: 'field_food_any_image',
    default_name: '其他配图',
    custom_name: '其他配图',
    field_type: 'UploadImage',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请上传其他配图',
    validation_rules: '[{',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1034,
    field_code: 'field_food_any_comment',
    default_name: '其他用户留言',
    custom_name: '其他用户留言',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入其他用户留言',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
  {
    id: 1035,
    field_code: 'field_food_any_log',
    default_name: '其他饮食记录',
    custom_name: '其他饮食记录',
    field_type: 'Textarea',
    value_type: 'String',
    field_status: 1,
    default_value: null,
    help_text: '请输入其他饮食记录',
    validation_rules: '',
    field_properties: '{',
    unit: '',
    reference_range: null,
    calculation_type: 'basic',
    calculation_expression: null,
    dependent_fields: null,
    is_system: 1,
    is_static: 0,
    can_delete: 0,
    created_at: '2024/8/15 15:14:35',
    updated_at: '2024/8/15 15:14:35',
    created_by: 999999,
    updated_by: 999999,
    deleted_at: null,
  },
];
