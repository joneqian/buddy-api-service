import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 't_wecom_chat_room',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  comment: '企微群表',
})
export class TWecomChatRoom extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT, comment: '自增主键' })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(100), comment: '群ID' })
  @Index({ name: 'idx_room_id', using: 'BTREE', order: 'ASC', unique: false })
  room_id!: string;

  @Column({ type: DataType.BIGINT, comment: '群创建时间戳', defaultValue: '0' })
  room_create_time?: number;

  @Column({ type: DataType.STRING(100), comment: '群创建人vwork ID' })
  create_vwork_user_id!: string;

  @Column({ type: DataType.TINYINT, comment: '是否为外部群：0-内部群，1-外部群', defaultValue: '0' })
  @Index({ name: 'idx_is_external', using: 'BTREE', order: 'ASC', unique: false })
  is_external?: number;

  @Column({ type: DataType.STRING(200), comment: '群昵称' })
  room_nick_name!: string;

  @Column({ type: DataType.INTEGER, comment: '群成员数量', defaultValue: '0' })
  room_member_total?: number;

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
