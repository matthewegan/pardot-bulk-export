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
  public id!: number

  @AllowNull
  @Column(DataType.STRING)
  public name!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public isOneToOne!: number

  @AllowNull
  @Column(DataType.STRING)
  public subject!: string

  @AllowNull
  @Column(DataType.TEXT)
  public messageText!: string

  @AllowNull
  @Column(DataType.TEXT)
  public messageHtml!: string

  @AllowNull
  @Column(DataType.DATE)
  public created_at!: Date

  public message?: { html: string; text: string }
}
