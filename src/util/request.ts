import axiosBase from 'axios'
import FormData from 'form-data'

import { PardotObject, PardotObjectResponse, RequestQueryParams } from '@/types'

export const axios = axiosBase.create({ baseURL: process.env.PARDOT_BASE_URL })

export const baseParams: RequestQueryParams = {
  format: 'json',
  output: 'bulk',
  sort_by: 'created_at',
  sort_order: 'ascending',
}

export async function getObjectData(
  pardotObject: PardotObject,
  createdAfter: string,
  queryParams: Partial<RequestQueryParams> = {},
  apiKey: string | undefined
): Promise<{ err?: string; result?: PardotObjectResponse }> {
  const { data } = await axios.get(`/${pardotObject}/version/4/do/query`, {
    headers: {
      Authorization: `Pardot user_key=${process.env.PARDOT_USER_KEY}`.concat(
        `, api_key=${apiKey}`
      ),
    },
    params: {
      created_after: createdAfter,
      ...Object.assign(baseParams, queryParams),
    },
  })
  return data
}

export async function login(): Promise<string> {
  const requestData = new FormData()
  requestData.append('email', process.env.PARDOT_USER_EMAIL)
  requestData.append('password', process.env.PARDOT_USER_PASSWORD)
  requestData.append('user_key', process.env.PARDOT_USER_KEY)

  const {
    data: { api_key },
  } = await axios.post('/login', requestData, {
    headers: { ...requestData.getHeaders() },
    params: { format: 'json' },
  })

  return api_key || ''
}
