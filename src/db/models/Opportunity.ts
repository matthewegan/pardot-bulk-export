import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'opportunity'

@Table({ modelName, tableName: 'opportunities', timestamps: false })
export default class Opportunity extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.STRING)
  public name!: string

  @AllowNull
  @Column(DataType.INTEGER)
  public value!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public probability!: number

  @AllowNull
  @Column(DataType.STRING)
  public type!: string

  @AllowNull
  @Column(DataType.STRING)
  public stage!: string

  @AllowNull
  @Column(DataType.STRING)
  public status!: string

  @AllowNull
  @Column(DataType.DATE)
  public closed_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  public updated_at!: Date

  @AllowNull
  @Column(DataType.INTEGER)
  public campaign_id?: number

  @AllowNull
  @Column(DataType.STRING)
  public campaign_name?: string | null

  @AllowNull
  @Column(DataType.INTEGER)
  public prospect_id?: number

  public campaign?: { id: number; name: string }

  public prospects?: { prospect: { id: number } }

  protected static modelName = modelName
}
