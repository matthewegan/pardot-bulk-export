import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'prospect'

@Table({ modelName, tableName: 'prospects', timestamps: false })
export default class Prospect extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public campaign_id!: number

  @AllowNull
  @Column(DataType.STRING)
  public campaign_name!: string | null

  @AllowNull
  @Column(DataType.INTEGER)
  public user_id!: number

  @AllowNull
  @Column(DataType.STRING)
  public salutation!: string

  @AllowNull
  @Column(DataType.STRING)
  public first_name!: string

  @AllowNull
  @Column(DataType.STRING)
  public last_name!: string

  @AllowNull
  @Column(DataType.STRING)
  public email!: string

  @AllowNull
  @Column(DataType.STRING)
  public company!: string

  @AllowNull
  @Column(DataType.STRING)
  public website!: string

  @AllowNull
  @Column(DataType.STRING)
  public job_title!: string

  @AllowNull
  @Column(DataType.STRING)
  public department!: string

  @AllowNull
  @Column(DataType.STRING)
  public country!: string

  @AllowNull
  @Column(DataType.STRING)
  public address_one!: string

  @AllowNull
  @Column(DataType.STRING)
  public address_two!: string

  @AllowNull
  @Column(DataType.STRING)
  public city!: string

  @AllowNull
  @Column(DataType.STRING)
  public state!: string

  @AllowNull
  @Column(DataType.STRING)
  public territory!: string

  @AllowNull
  @Column(DataType.STRING)
  public zip!: string

  @AllowNull
  @Column(DataType.STRING)
  public phone!: string

  @AllowNull
  @Column(DataType.STRING)
  public source!: string

  @AllowNull
  @Column(DataType.STRING)
  public annual_revenue!: string

  @AllowNull
  @Column(DataType.STRING)
  public employees!: string

  @AllowNull
  @Column(DataType.STRING)
  public industry!: string

  @AllowNull
  @Column(DataType.STRING)
  public years_in_business!: string

  @AllowNull
  @Column(DataType.INTEGER)
  public score!: number

  @AllowNull
  @Column(DataType.STRING)
  public grade!: string

  @AllowNull
  @Column(DataType.STRING)
  public crm_lead_fid!: string

  @AllowNull
  @Column(DataType.STRING)
  public crm_contact_fid!: string

  @AllowNull
  @Column(DataType.STRING)
  public crm_owner_fid!: string

  @AllowNull
  @Column(DataType.DATE)
  public last_activity_at!: string

  @AllowNull
  @Column(DataType.TINYINT)
  public is_do_not_email!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public is_do_not_call!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public opted_out!: number

  @AllowNull
  @Column(DataType.TINYINT)
  public is_reviewed!: number

  @AllowNull
  @Column(DataType.DATE)
  public updated_at!: Date

  @AllowNull
  @Column(DataType.INTEGER)
  public prospect_account_id!: number

  public campaign?: { id: number; name: string }

  protected static modelName = modelName
}
