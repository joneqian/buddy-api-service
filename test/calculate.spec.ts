import { CalculatedConfig, FieldValues, Calculated } from '@libs/calculated';

describe('test calculated', () => {
  // it('simple expression', async () => {
  //   const calculated = new Calculated();
  //   const config: CalculatedConfig = {
  //     calculation_type: 'simple',
  //     calculation_expression: '{a} + {b}',
  //     dependent_fields: ['a', 'b'],
  //   };
  //   const fieldValues: FieldValues = {
  //     a: 1,
  //     b: 2,
  //   };
  //   const result = calculated.calculateFieldValue(config, fieldValues);
  //   console.log('simple result:', result);
  // });

  // it('complex expression', async () => {
  //   const calculated = new Calculated();
  //   const config: CalculatedConfig = {
  //     calculation_type: 'complex',
  //     calculation_expression: `
  //       const { field_birthday } = args;
  //       const birthDate = new Date(field_birthday);
  //       const age = new Date().getFullYear() - birthDate.getFullYear();
  //       return age;
  //     `,
  //     dependent_fields: ['field_birthday'],
  //   };
  //   const fieldValues: FieldValues = {
  //     field_birthday: '1983-09-26',
  //   };
  //   const result = await calculated.calculateFieldValue(config, fieldValues);
  //   console.log('complex result:', result);
  // });

  it('complex expression', async () => {
    const calculated = new Calculated();
    const config: CalculatedConfig = {
      calculation_type: 'complex',
      calculation_expression: `
       const { field_hyperglycemia_date } = args;
       const today = new Date();
       const targetDate = new Date(field_hyperglycemia_date);
       const diffTime = today - targetDate;
       const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
       return diffYears.toFixed(1);
      `,
      dependent_fields: ['field_hyperglycemia_date'],
    };
    const fieldValues: FieldValues = {
      field_hyperglycemia_date: '2021-09-10',
    };
    const result = await calculated.calculateFieldValue(config, fieldValues);
    console.log('complex result:', result);
  });
});
