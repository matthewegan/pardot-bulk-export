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

@Table({
  modelName,
  tableName: 'visitor_activities',
  timestamps: false,
})
export default class VisitorActivity extends AppModel {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  prospect_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  type!: number

  @AllowNull
  @Column(DataType.STRING)
  details!: number

  @AllowNull
  @Column(DataType.INTEGER)
  email_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  email_template_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  list_email_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  form_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  form_handler_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  site_search_query_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  landing_page_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  paid_search_ad_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  multivariate_test_variation_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  visitor_page_view_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  file_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  custom_redirect_id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  campaign_id!: number

  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date

  protected static modelName = modelName
}
