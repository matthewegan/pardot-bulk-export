import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'listMembership'

@Table({ modelName, tableName: 'list_memberships', timestamps: false })
export default class ListMembership extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @Column(DataType.INTEGER)
  public list_id!: number

  @Column(DataType.INTEGER)
  public prospect_id!: number

  @Column(DataType.TINYINT)
  public opted_out!: number

  @AllowNull
  @Column(DataType.DATE)
  public updated_at!: Date

  protected static modelName = modelName
}
