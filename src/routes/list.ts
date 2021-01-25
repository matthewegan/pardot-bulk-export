import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { List } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await List.truncate()
      }

      await List.import({ createdAfter: createdAfter as string })

      return res.status(200).json({ message: 'Lists imported', success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: e.message, success: false })
    }
  })
