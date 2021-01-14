import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  modelName: 'emailClick',
  tableName: 'email_clicks',
  timestamps: false,
})
export default class EmailClick extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  prospect_id!: number

  @AllowNull
  @Column(DataType.STRING(765))
  url!: string

  @AllowNull
  @Column(DataType.INTEGER)
  list_email_id?: number | null

  @AllowNull
  @Column(DataType.INTEGER)
  email_template_id?: number | null

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date
}
