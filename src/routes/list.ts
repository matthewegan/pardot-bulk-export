import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { importObjectData } from '@/util/import'
import { List } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await List.truncate()
      }

      await importObjectData({
        createdAfter: createdAfter as string,
        insert: async (objectData) => {
          await List.bulkCreate(objectData)
        },
        pardotObject: 'list',
      })

      return res.status(200).json({ message: 'Lists imported', success: true })
    } catch (e) {
      return res.status(500).json({ message: e.message, success: false })
    }
  })
