import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 't_wecom_chat_room_member',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  comment: '企微群成员表',
})
export class TWecomChatRoomMember extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT, comment: '自增主键' })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.STRING(100), comment: '群ID' })
  @Index({ name: 'idx_room_id', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'uk_room_member', using: 'BTREE', order: 'ASC', unique: true })
  room_id!: string;

  @Column({ type: DataType.STRING(100), comment: '用户vwork ID' })
  @Index({ name: 'idx_vwork_user_id', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'uk_room_member', using: 'BTREE', order: 'ASC', unique: true })
  vwork_user_id!: string;

  @Column({ type: DataType.STRING(500), comment: '头像地址' })
  avatar_url!: string;

  @Column({ type: DataType.STRING(100), comment: '公司ID' })
  @Index({ name: 'idx_corp_id', using: 'BTREE', order: 'ASC', unique: false })
  corp_id!: string;

  @Column({ type: DataType.STRING(500), comment: '描述' })
  desc!: string;

  @Column({ type: DataType.STRING(100), comment: '邀请人vwork ID' })
  @Index({ name: 'idx_invite_vwork_user_id', using: 'BTREE', order: 'ASC', unique: false })
  invite_vwork_user_id!: string;

  @Column({ type: DataType.TINYINT, comment: '是否为管理员：0-否，1-是', defaultValue: '0' })
  @Index({ name: 'idx_is_admin', using: 'BTREE', order: 'ASC', unique: false })
  is_admin?: number;

  @Column({ type: DataType.BIGINT, comment: '进群时间戳', defaultValue: '0' })
  join_time?: number;

  @Column({ type: DataType.STRING(20), comment: '手机号' })
  mobile!: string;

  @Column({ type: DataType.STRING(100), comment: '昵称' })
  nick_name!: string;

  @Column({ type: DataType.STRING(100), comment: '职位' })
  position!: string;

  @Column({ type: DataType.STRING(200), comment: '备注' })
  remark!: string;

  @Column({ type: DataType.TINYINT, comment: '性别：0-未设置，1-男，2-女', defaultValue: '0' })
  sex?: number;

  @Column({ type: DataType.STRING(100), comment: '关联ID' })
  unionid!: string;

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
