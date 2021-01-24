import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({ modelName: 'prospect', tableName: 'prospects', timestamps: false })
export default class Prospect extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.INTEGER)
  campaign_id!: number

  @AllowNull
  @Column(DataType.STRING)
  campaign_name!: string | null

  @AllowNull
  @Column(DataType.INTEGER)
  user_id!: number

  @AllowNull
  @Column(DataType.STRING)
  salutation!: string

  @AllowNull
  @Column(DataType.STRING)
  first_name!: string

  @AllowNull
  @Column(DataType.STRING)
  last_name!: string

  @AllowNull
  @Column(DataType.STRING)
  email!: string

  @AllowNull
  @Column(DataType.STRING)
  company!: string

  @AllowNull
  @Column(DataType.STRING)
  website!: string

  @AllowNull
  @Column(DataType.STRING)
  job_title!: string

  @AllowNull
  @Column(DataType.STRING)
  department!: string

  @AllowNull
  @Column(DataType.STRING)
  country!: string

  @AllowNull
  @Column(DataType.STRING)
  address_one!: string

  @AllowNull
  @Column(DataType.STRING)
  address_two!: string

  @AllowNull
  @Column(DataType.STRING)
  city!: string

  @AllowNull
  @Column(DataType.STRING)
  state!: string

  @AllowNull
  @Column(DataType.STRING)
  territory!: string

  @AllowNull
  @Column(DataType.STRING)
  zip!: string

  @AllowNull
  @Column(DataType.STRING)
  phone!: string

  @AllowNull
  @Column(DataType.STRING)
  source!: string

  @AllowNull
  @Column(DataType.STRING)
  annual_revenue!: string

  @AllowNull
  @Column(DataType.STRING)
  employees!: string

  @AllowNull
  @Column(DataType.STRING)
  industry!: string

  @AllowNull
  @Column(DataType.STRING)
  years_in_business!: string

  @AllowNull
  @Column(DataType.INTEGER)
  score!: number

  @AllowNull
  @Column(DataType.STRING)
  grade!: string

  @AllowNull
  @Column(DataType.STRING)
  crm_lead_fid!: string

  @AllowNull
  @Column(DataType.STRING)
  crm_contact_fid!: string

  @AllowNull
  @Column(DataType.STRING)
  crm_owner_fid!: string

  @AllowNull
  @Column(DataType.DATE)
  last_activity_at!: string

  @AllowNull
  @Column(DataType.TINYINT)
  is_do_not_email!: number

  @AllowNull
  @Column(DataType.TINYINT)
  is_do_not_call!: number

  @AllowNull
  @Column(DataType.TINYINT)
  opted_out!: number

  @AllowNull
  @Column(DataType.TINYINT)
  is_reviewed!: number

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date

  @AllowNull
  @Column(DataType.INTEGER)
  prospect_account_id!: number

  campaign?: { id: number; name: string }
}
