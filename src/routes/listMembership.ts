import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { importObjectData } from '@/util/import'
import { ListMembership } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await ListMembership.truncate()
      }

      await importObjectData({
        createdAfter: createdAfter as string,
        pardotObject: 'listMembership',
        insertAction: async (objectData) => {
          await ListMembership.bulkCreate(objectData)
        },
      })

      return res
        .status(200)
        .json({ message: 'List memberships imported', success: true })
    } catch (e) {
      return res.status(500).json({ message: e.message, success: false })
    }
  })
