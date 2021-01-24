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
  id!: number

  @AllowNull
  @Column(DataType.STRING)
  name!: string

  @AllowNull
  @Column(DataType.TEXT)
  htmlMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  textMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  trackedTextMessage!: string

  @AllowNull
  @Column(DataType.TEXT)
  trackedHtmlMessage!: string

  @AllowNull
  @Column(DataType.STRING)
  fromName!: string

  @AllowNull
  @Column(DataType.TINYINT)
  isOneToOneEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  isArchived!: number

  @AllowNull
  @Column(DataType.TINYINT)
  isAutoResponderEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  isDripEmail!: number

  @AllowNull
  @Column(DataType.TINYINT)
  isListEmail!: number

  @AllowNull
  @Column(DataType.STRING)
  subject!: string

  @PrimaryKey
  @Column(DataType.INTEGER)
  emailType!: number

  @PrimaryKey
  @Column(DataType.INTEGER)
  type!: number

  @AllowNull
  @Column(DataType.TINYINT)
  sendFromAccountOwner!: number

  @AllowNull
  @Column(DataType.TINYINT)
  isTest!: number

  @AllowNull
  @Column(DataType.STRING)
  replyToAddress!: string

  @AllowNull
  @Column(DataType.STRING)
  sendFromData!: string

  @AllowNull
  @Column(DataType.STRING)
  abVersion!: string

  @AllowNull
  @Column(DataType.TINYINT)
  error!: number

  @AllowNull
  @Column(DataType.STRING)
  errorCode?: string

  @AllowNull
  @Column(DataType.STRING)
  errorMessage?: string

  sendOptions!: {
    abVersion: string | null
    isTest: number | null
    replyToAddress: string
    sendFromAccountOwner: number | null
    sendFromData: string
  }

  created_at?: Date
}
