import { FindOptions, literal, Op } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

import db from '@/db'

export async function authenticate(syncDb = false): Promise<Sequelize | void> {
  db.authenticate()

  if (syncDb) {
    return sync()
  }
}

export function findDistinctOptions(col: string): FindOptions {
  return {
    attributes: [[literal('distinct `' + col + '`'), col]],
    raw: true,
    where: { [col]: { [Op.not]: null } },
  }
}

export async function sync(): Promise<Sequelize> {
  return db.sync()
}
