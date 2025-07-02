/*
 * @Author: leyi leyi@myun.info
 * @Date: 2024-08-06 10:57:19
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2025-02-12 16:34:52
 * @FilePath: /buddy-api-service/src/libs/calculated.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { evaluate } from 'mathjs'; // 用于解析和计算数学表达式
import { executeFunction } from './execute-fun';

// 定义计算字段的配置接口
export interface CalculatedConfig {
  calculation_type: 'simple' | 'complex';
  calculation_expression: string;
  dependent_fields: string[];
}

// 定义字段值的接口
export interface FieldValues {
  [key: string]: any;
}

export class Calculated {
  // 计算字段值
  calculateFieldValue(config: CalculatedConfig, fieldValues: FieldValues): any {
    if (this.validateDependentFields(config.dependent_fields, fieldValues)) {
      if (config.calculation_type === 'simple') {
        return this.evaluateSimpleExpression(config.calculation_expression, fieldValues);
      } else if (config.calculation_type === 'complex') {
        return this.evaluateComplexExpression(config.calculation_expression, fieldValues);
      }
    } else {
      console.log('Not all dependent fields have values');
    }
  }

  // 评估简单表达式
  private evaluateSimpleExpression(expression: string, fieldValues: FieldValues): any {
    // 替换表达式中的字段名为实际值
    const processedExpression = expression.replace(/\{(\w+)\}/g, (match, fieldName) => {
      return fieldValues[fieldName] !== undefined ? fieldValues[fieldName].toString() : 'null';
    });
    try {
      return evaluate(processedExpression);
    } catch (error) {
      console.error('Error evaluating simple expression:', error);
      return null;
    }
  }

  // 评估复杂表达式
  private evaluateComplexExpression(expression: string, fieldValues: FieldValues): Promise<any> {
    // 替换表达式中的字段名为实际值
    try {
      return executeFunction(expression, fieldValues);
    } catch (error) {
      console.error('Error evaluating complex expression:', error);
      return null;
    }
  }

  // 验证所有依赖字段是否都有值
  validateDependentFields(dependentFields: string[], fieldValues: FieldValues): boolean {
    return dependentFields.every((field) => fieldValues[field] !== undefined);
  }
}
