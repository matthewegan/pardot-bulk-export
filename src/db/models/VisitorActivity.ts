import {
  AllowNull,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

import { AppModel } from '@/db/models'
import { PardotObject } from '@/types'

const modelName: PardotObject = 'visitorActivity'

@Table({ modelName, tableName: 'visitor_activities', timestamps: false })
export default class VisitorActivity extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public prospect_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public type!: number

  @AllowNull
  @Column(DataType.STRING)
  public details!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public email_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public email_template_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public list_email_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public form_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public form_handler_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public site_search_query_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public landing_page_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public paid_search_ad_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public multivariate_test_variation_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public visitor_page_view_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public file_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public custom_redirect_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  public campaign_id!: number

  @AllowNull
  @Column(DataType.DATE)
  public updated_at!: Date

  protected static modelName = modelName
}
