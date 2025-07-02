import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 't_wecom_robot_server',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  comment: '项目企微机器人服务器表',
})
export class TWecomRobotServer extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT, comment: '自增主键' })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(17), comment: 'MAC地址' })
  @Index({ name: 'idx_mac_address', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'idx_server_info', using: 'BTREE', order: 'ASC', unique: false })
  mac_address!: string;

  @Column({ type: DataType.STRING(45), comment: '服务器IP地址' })
  @Index({ name: 'idx_server_info', using: 'BTREE', order: 'ASC', unique: false })
  server_ip!: string;

  @Column({ type: DataType.INTEGER, comment: '服务器端口', defaultValue: '0' })
  @Index({ name: 'idx_server_info', using: 'BTREE', order: 'ASC', unique: false })
  server_port?: number;

  @Column({ type: DataType.TINYINT, comment: '服务器状态：0-停用，1-启用', defaultValue: '1' })
  @Index({ name: 'idx_server_status', using: 'BTREE', order: 'ASC', unique: false })
  server_status?: number;

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
