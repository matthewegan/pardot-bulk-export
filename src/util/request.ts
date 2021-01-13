import axiosBase from 'axios'

import { PardotObject, PardotObjectResponse } from '@/types'

export const axios = axiosBase.create({ baseURL: process.env.PARDOT_BASE_URL })

axios.defaults.headers.common[
  'Authorization'
] = `Pardot user_key=${process.env.PARDOT_USER_KEY}, api_key=${process.env.PARDOT_API_KEY}`

export const baseParams = {
  format: 'json',
  output: 'bulk',
  sort_by: 'created_at',
  sort_order: 'ascending',
}

export async function getObjectData(
  pardotObject: PardotObject,
  createdAfter: string
): Promise<{ err?: string; result?: PardotObjectResponse }> {
  const { data } = await axios.get(`/${pardotObject}/version/4/do/query`, {
    params: {
      created_after: createdAfter,
      ...baseParams,
    },
  })
  return data
}
