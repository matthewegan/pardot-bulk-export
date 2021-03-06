import { Sequelize } from 'sequelize-typescript'

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
import { toBoolean } from '@/util'

export default new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    models: [
      Email,
      EmailClick,
      EmailTemplate,
      List,
      ListMembership,
      Opportunity,
      Prospect,
      VisitorActivity,
    ],
    port: +(process.env.DB_PORT as string),
    sync: { force: toBoolean(process.env.DB_FORCE_SYNC) },
  }
)
