import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  modelName: 'listMembership',
  tableName: 'list_memberships',
  timestamps: false,
})
export default class ListMembership extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @Column(DataType.INTEGER)
  list_id!: number

  @Column(DataType.INTEGER)
  prospect_id!: number

  @Column(DataType.TINYINT)
  opted_out!: number

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date
}
