import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  modelName: 'emailTemplate',
  tableName: 'email_templates',
  timestamps: false,
})
export default class EmailTemplate extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.STRING)
  public name!: string

  @AllowNull
  @Column(DataType.TEXT)
  public htmlMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  public textMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  public trackedTextMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  public trackedHtmlMessage!: string

  @AllowNull
  @Column(DataType.STRING)
  public fromName!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public isOneToOneEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public isArchived!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public isAutoResponderEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public isDripEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public isListEmail!: number

  @AllowNull
  @Column(DataType.STRING)
  public subject!: string

  @PrimaryKey
  @Column(DataType.INTEGER)
  public emailType!: number

  @PrimaryKey
  @Column(DataType.INTEGER)
  public type!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public sendFromAccountOwner!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public isTest!: number

  @AllowNull
  @Column(DataType.STRING)
  public replyToAddress!: string

  @AllowNull
  @Column(DataType.STRING)
  public sendFromData!: string

  @AllowNull
  @Column(DataType.STRING)
  public abVersion!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public error!: number

  @AllowNull
  @Column(DataType.STRING)
  public errorCode?: string

  @AllowNull
  @Column(DataType.STRING)
  public errorMessage?: string

  public created_at?: Date

  public sendOptions!: {
    abVersion: string | null
    isTest: number | null
    replyToAddress: string
    sendFromAccountOwner: number | null
    sendFromData: string
  }
}
