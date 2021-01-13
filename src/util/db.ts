import { Sequelize } from 'sequelize-typescript'

import db from '@/db'

export async function authenticate(syncDb = false): Promise<Sequelize | void> {
  db.authenticate()

  if (syncDb) {
    return sync()
  }
}

export async function sync(): Promise<Sequelize> {
  return db.sync()
}
