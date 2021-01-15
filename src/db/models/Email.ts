import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  modelName: 'email',
  tableName: 'emails',
  timestamps: false,
})
export default class Email extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.STRING)
  name!: string

  @AllowNull
  @Column(DataType.TINYINT)
  isOneToOne!: number

  @AllowNull
  @Column(DataType.STRING)
  subject!: string

  @AllowNull
  @Column(DataType.TEXT)
  messageText!: string

  @AllowNull
  @Column(DataType.TEXT)
  html!: string

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date
}
