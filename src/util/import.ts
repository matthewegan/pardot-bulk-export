import { getObjectData } from '@/util/request'
import { PardotObject, PardotObjectModel } from '@/types'

export function getLastRecordedCreatedAt(data: PardotObjectModel[]): string {
  const [lastRecordedCreatedAtDate, lastRecordedCreatedAtTime] = ((data[
    data.length - 1
  ].created_at as unknown) as string).split(' ')
  return `${lastRecordedCreatedAtDate}T${lastRecordedCreatedAtTime}`
}

export async function importObjectData({
  createdAfter,
  insertAction,
  pardotObject,
}: {
  createdAfter: string
  insertAction: (objectData: PardotObjectModel[]) => Promise<void>
  pardotObject: PardotObject
}): Promise<void> {
  const { err, result } = await getObjectData(pardotObject, createdAfter)

  if (err) {
    throw new Error(err)
  }

  const objectData = result?.[pardotObject] || []

  await insertAction(objectData)

  if (objectData.length) {
    await importObjectData({
      createdAfter: getLastRecordedCreatedAt(objectData),
      insertAction,
      pardotObject,
    })
  }
}
