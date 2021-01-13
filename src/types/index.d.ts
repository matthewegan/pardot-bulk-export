import Prospect from '@/db/models/Prospect'

export type PardotObject = 'prospect'

export type PardotObjectResponse = {
  [DataObject in PardotObject]: PardotObjectModel[]
}

export type PardotObjectModel = Prospect
