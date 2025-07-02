import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 't_wecom_robot_login',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  comment: '项目企微登录表',
})
export class TWecomRobotLogin extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT, comment: '自增主键' })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(17), comment: 'MAC地址' })
  @Index({ name: 'idx_mac_address', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'idx_vwork_user_id', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'idx_wecom_login_port_mac', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'idx_wecom_pid', using: 'BTREE', order: 'ASC', unique: false })
  mac_address!: string;

  @Column({ type: DataType.INTEGER, comment: '企微登录端口', defaultValue: '0' })
  @Index({ name: 'idx_wecom_login_port_mac', using: 'BTREE', order: 'ASC', unique: false })
  wecom_login_port?: number;

  @Column({ type: DataType.INTEGER, comment: '企微PID', defaultValue: '0' })
  @Index({ name: 'idx_wecom_pid', using: 'BTREE', order: 'ASC', unique: false })
  wecom_pid?: number;

  @Column({ type: DataType.TINYINT, comment: '是否需要验证码：0-否，1-是', defaultValue: '0' })
  need_verify_code?: number;

  @Column({ type: DataType.STRING(100), comment: '员工企微用户vwork ID' })
  @Index({ name: 'idx_vwork_user_id', using: 'BTREE', order: 'ASC', unique: false })
  vwork_user_id!: string;

  @Column({ allowNull: true, type: DataType.DATE, comment: '最近登录时间' })
  last_login_time?: Date;

  @Column({ allowNull: true, type: DataType.DATE, comment: '登录状态更新时间' })
  login_status_updated_time?: Date;

  @Column({ type: DataType.TINYINT, comment: '登录状态：0-离线，1-在线', defaultValue: '0' })
  login_status?: number;

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
