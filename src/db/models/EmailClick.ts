import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'emailClick'

@Table({ modelName, tableName: 'email_clicks', timestamps: false })
export default class EmailClick extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public prospect_id!: number

  @AllowNull
  @Column(DataType.STRING(765))
  public url!: string

  @AllowNull
  @Column(DataType.INTEGER)
  public list_email_id?: number | null

  @AllowNull
  @Column(DataType.INTEGER)
  public email_template_id?: number | null

  protected static modelName = modelName
}
