import { IsNotEmpty, IsString, IsNumber, IsInt, Min, Max, IsArray, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseDTO {
  @ApiPropertyOptional({
    description: '时间戳',
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'timestamp必须为有效整数' })
  readonly timestamp?: number;

  @ApiPropertyOptional({
    description: '签名',
    type: String,
  })
  @IsOptional()
  @IsString({ message: 'sign必须为字符串' })
  readonly sign?: string;

  @ApiPropertyOptional({
    description: '缓存key',
    type: String,
  })
  @IsOptional()
  @IsString({ message: 'cache_key必须为字符串' })
  readonly cache_key?: string;

  @ApiPropertyOptional({
    description: '删除缓存key',
    type: [String],
  })
  @IsOptional()
  @IsArray({ message: 'del_cache_key必须为数组' })
  readonly del_cache_key?: string[];

  @ApiPropertyOptional({
    description: '缓存模式，EX或者PX，不传默认EX',
    type: String,
  })
  @IsOptional()
  @IsString({ message: 'cache_mode必须为字符串' })
  readonly cache_mode?: string;

  @ApiPropertyOptional({
    description: '缓存时长，不传时1~20秒随机',
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'cache_time必须为有效整数' })
  @Min(1, { message: 'cache_time必须大于等于1' })
  readonly cache_time?: number;
}

export class QueryDTO extends BaseDTO {
  @ApiPropertyOptional({
    description: 'page_num页面(1开始)',
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'page_num必须为必须为有效整数' })
  @Min(1, { message: 'page_num应大于等于1' })
  readonly page_num = 1;

  @ApiPropertyOptional({
    description: 'page_size页面(1开始)',
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'page_size必须为必须为有效整数' })
  @Min(1, { message: 'page_size应大于等于1' })
  @Max(1000, { message: 'page_size应小于等于1000' })
  readonly page_size = 10;

  @ApiPropertyOptional({
    description: '排序字段(https://www.sequelize.com.cn/core-concepts/model-querying-basics#%E6%8E%92%E5%BA%8F)',
    type: Array,
  })
  @IsOptional()
  @IsArray({ message: 'order必须为数组' })
  readonly order?: Array<any>;

  @ApiPropertyOptional({
    description:
      '查询字段名(https://www.sequelize.com.cn/core-concepts/model-querying-basics#select-%E6%9F%A5%E8%AF%A2%E7%89%B9%E5%AE%9A%E5%B1%9E%E6%80%A7)',
    type: [String],
  })
  @IsOptional()
  @IsArray({ message: 'attributes必须为数组' })
  readonly attributes?: string[];

  getQueryPageParam() {
    const page_num = this.page_num || 1;
    const page_size = this.page_size || 10;
    return {
      limit: page_size,
      offset: (page_num - 1) * page_size,
    };
  }
}
