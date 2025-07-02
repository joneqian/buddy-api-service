import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 't_wecom_robot',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  comment: '项目企微机器人表',
})
export class TWecomRobot extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT, comment: '自增主键' })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(100), comment: '员工企微用户vwork ID' })
  @Index({ name: 'idx_vwork_user_id', using: 'BTREE', order: 'ASC', unique: false })
  vwork_user_id!: string;

  @Column({ type: DataType.STRING(100), comment: '别名' })
  alias!: string;

  @Column({ type: DataType.STRING(500), comment: '头像地址' })
  avatar_url!: string;

  @Column({ type: DataType.STRING(100), comment: '公司ID' })
  @Index({ name: 'idx_corp_id', using: 'BTREE', order: 'ASC', unique: false })
  corp_id!: string;

  @Column({ type: DataType.STRING(200), comment: '公司全称' })
  corp_name!: string;

  @Column({ type: DataType.STRING(100), comment: '公司简称' })
  corp_short_name!: string;

  @Column({ type: DataType.STRING(100), comment: '部门ID' })
  dept_id!: string;

  @Column({ type: DataType.STRING(200), comment: '部门名称' })
  dept_name!: string;

  @Column({ type: DataType.STRING(100), comment: '邮箱' })
  email!: string;

  @Column({ type: DataType.STRING(100), comment: '职位' })
  job_name!: string;

  @Column({ type: DataType.STRING(20), comment: '手机号' })
  mobile!: string;

  @Column({ type: DataType.STRING(100), comment: '昵称' })
  nick_name!: string;

  @Column({ type: DataType.STRING(100), comment: '职位' })
  position!: string;

  @Column({ type: DataType.STRING(100), comment: '真实姓名' })
  real_name!: string;

  @Column({ type: DataType.TINYINT, comment: '性别：0-未设置，1-男，2-女', defaultValue: '0' })
  sex?: number;

  @Column({ type: DataType.TINYINT, comment: '机器人状态：0-停用，1-启用', defaultValue: '1' })
  @Index({ name: 'idx_robot_status', using: 'BTREE', order: 'ASC', unique: false })
  robot_status?: number;

  @Column({ type: DataType.DATE, comment: '创建时间' })
  created_at!: Date;

  @Column({ type: DataType.DATE, comment: '更新时间' })
  updated_at!: Date;

  @Column({ type: DataType.BIGINT, comment: '创建人ID', defaultValue: '0' })
  created_by?: number;

  @Column({ type: DataType.BIGINT, comment: '修改人ID', defaultValue: '0' })
  updated_by?: number;

  @Column({ allowNull: true, type: DataType.DATE, comment: '删除时间' })
  deleted_at?: Date;
}
