import { List, ListMembership, Opportunity, Prospect } from '@/db/models'

export type PardotObject =
  | 'list'
  | 'listMembership'
  | 'opportunity'
  | 'prospect'

export type PardotObjectResponse = {
  [DataObject in PardotObject]: PardotObjectModel[]
}

export type PardotObjectModel = List | ListMembership | Opportunity | Prospect
