import {
  Email,
  EmailClick,
  EmailTemplate,
  List,
  ListMembership,
  Opportunity,
  Prospect,
  VisitorActivity,
} from '@/db/models'

export type PardotObject =
  | 'email'
  | 'emailClick'
  | 'emailTemplate'
  | 'list'
  | 'listMembership'
  | 'opportunity'
  | 'prospect'
  | 'visitorActivity'

export type PardotObjectResponse = {
  [DataObject in PardotObject]: PardotObjectModel[]
}

export type PardotObjectModel =
  | Email
  | EmailClick
  | EmailTemplate
  | List
  | ListMembership
  | Opportunity
  | Prospect
  | VisitorActivity

export interface RequestQueryParams {
  format: 'json'
  output: 'bulk'
  sort_by: string
  sort_order: 'ascending'
}
