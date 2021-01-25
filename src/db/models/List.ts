import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'list'

@Table({ modelName, tableName: 'lists', timestamps: false })
export default class List extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.STRING)
  public name!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public is_public!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public is_dynamic!: number

  @AllowNull
  @Column(DataType.STRING)
  public title!: string

  @AllowNull
  @Column(DataType.STRING)
  public description!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public is_crm_visible!: number

  @AllowNull
  @Column(DataType.DATE)
  public updated_at!: Date

  protected static modelName = modelName
}
