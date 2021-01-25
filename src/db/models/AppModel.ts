import { AllowNull, Column, DataType, Model } from 'sequelize-typescript'
import { literal } from 'sequelize'

import { importObjectData } from '@/util/import'
import { login } from '@/util/request'
import { PardotObject, PardotObjectModel, RequestQueryParams } from '@/types'

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

  static async import({
    apiKey = '',
    createdAfter,
    dataMap,
    queryParams = {},
  }: {
    apiKey?: string
    createdAfter: string
    dataMap?: (objectData: PardotObjectModel[]) => PardotObjectModel[]
    queryParams?: Partial<RequestQueryParams>
  }): Promise<void> {
    await importObjectData({
      apiKey,
      authenticate: async () => {
        await this.import({
          apiKey: await login(),
          createdAfter: await this.getLastCreatedAt(),
          dataMap,
          queryParams,
        })
      },
      createdAfter: createdAfter,
      insert: async (objectData) => {
        if (dataMap) {
          objectData = dataMap(objectData)
        }
        await this.bulkCreate(objectData)
      },
      pardotObject: this.modelName,
      queryParams,
    })
  }
}
