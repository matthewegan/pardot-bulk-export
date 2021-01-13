import { Sequelize } from 'sequelize-typescript'

import { List, ListMembership, Opportunity, Prospect } from '@/db/models'

export default new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    models: [List, ListMembership, Opportunity, Prospect],
    port: +(process.env.DB_PORT as string),
    sync: { force: false },
  }
)
