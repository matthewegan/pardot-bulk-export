import { AllowNull, Column, DataType, Model } from 'sequelize-typescript'
import { literal } from 'sequelize'

import { importObjectData } from '@/util/import'
import { login } from '@/util/request'
import { PardotObject } from '@/types'

export default class AppModel extends Model {
  @AllowNull
  @Column(DataType.DATE)
  created_at!: Date

  protected static modelName: PardotObject

  static async getLastCreatedAt(): Promise<string> {
    return (
      (
        await this.findOne({
          attributes: [
            [
              literal("convert_tz(`created_at`, '+00:00', '-04:00')"),
              'created_at',
            ],
          ],
          order: [['created_at', 'desc']],
          raw: true,
        })
      )?.created_at
        .toISOString()
        .replace(/\..+/, '') || ''
    )
  }

  static async import(
    createdAfter: string,
    apiKey: string | undefined = process.env.PARDOT_API_KEY
  ): Promise<void> {
    await importObjectData({
      apiKey,
      authenticate: async () => {
        await this.import(await this.getLastCreatedAt(), await login())
      },
      createdAfter: createdAfter,
      insert: async (objectData) => {
        await this.bulkCreate(objectData)
      },
      pardotObject: this.modelName,
    })
  }
}
