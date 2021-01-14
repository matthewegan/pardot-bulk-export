import { Sequelize } from 'sequelize-typescript'

import {
  EmailClick,
  List,
  ListMembership,
  Opportunity,
  Prospect,
  VisitorActivity,
} from '@/db/models'

export default new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    models: [
      EmailClick,
      List,
      ListMembership,
      Opportunity,
      Prospect,
      VisitorActivity,
    ],
    port: +(process.env.DB_PORT as string),
    sync: { force: true },
  }
)
