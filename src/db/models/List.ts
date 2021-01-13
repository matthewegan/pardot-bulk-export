import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({ modelName: 'list', tableName: 'lists', timestamps: false })
export default class List extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.STRING)
  name!: string

  @AllowNull
  @Column(DataType.TINYINT)
  is_public!: number

  @AllowNull
  @Column(DataType.TINYINT)
  is_dynamic!: number

  @AllowNull
  @Column(DataType.STRING)
  title!: string

  @AllowNull
  @Column(DataType.STRING)
  description!: string

  @AllowNull
  @Column(DataType.TINYINT)
  is_crm_visible!: number

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date
}
