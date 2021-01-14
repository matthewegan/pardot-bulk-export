import { snakeCase } from 'lodash'

import { getObjectData } from '@/util/request'
import { PardotObject, PardotObjectModel, RequestQueryParams } from '@/types'

export function getLastRecordedCreatedAt(data: PardotObjectModel[]): string {
  const [lastRecordedCreatedAtDate, lastRecordedCreatedAtTime] = ((data[
    data.length - 1
  ].created_at as unknown) as string).split(' ')
  return `${lastRecordedCreatedAtDate}T${lastRecordedCreatedAtTime}`
}

export async function importObjectData({
  createdAfter,
  insertAction,
  lastRecordedIds = [],
  pardotObject,
  queryParams = {},
}: {
  createdAfter: string
  insertAction: (objectData: PardotObjectModel[]) => Promise<void>
  lastRecordedIds?: number[]
  pardotObject: PardotObject
  queryParams?: Partial<RequestQueryParams>
}): Promise<void> {
  const { err, result } = await getObjectData(
    pardotObject,
    createdAfter,
    queryParams
  )

  if (err) {
    throw new Error(err)
  }

  let objectData =
    result?.[pardotObject] || result?.[snakeCase(pardotObject)] || []

  if (objectData && Array.isArray(objectData) && objectData.length) {
    if (lastRecordedIds.length) {
      objectData = objectData.filter(({ id }) => !lastRecordedIds.includes(id))
    }

    await insertAction(objectData)

    await importObjectData({
      createdAfter: getLastRecordedCreatedAt(objectData),
      insertAction,
      pardotObject,
      queryParams,
      lastRecordedIds: objectData.map(({ id }) => id),
    })
  }
}
