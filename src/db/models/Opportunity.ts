import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  modelName: 'opportunity',
  tableName: 'opportunities',
  timestamps: false,
})
export default class Opportunity extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number

  @AllowNull
  @Column(DataType.STRING)
  name!: string

  @AllowNull
  @Column(DataType.INTEGER)
  value!: number

  @AllowNull
  @Column(DataType.INTEGER)
  probability!: number

  @AllowNull
  @Column(DataType.STRING)
  type!: string

  @AllowNull
  @Column(DataType.STRING)
  stage!: string

  @AllowNull
  @Column(DataType.STRING)
  status!: string

  @AllowNull
  @Column(DataType.DATE)
  closed_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date

  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date

  @AllowNull
  @Column(DataType.INTEGER)
  campaign_id?: number

  @AllowNull
  @Column(DataType.STRING)
  campaign_name?: string | null

  @AllowNull
  @Column(DataType.INTEGER)
  prospect_id?: number

  campaign?: { id: number; name: string }

  prospects?: { prospect: { id: number } }
}
