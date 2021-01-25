import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { ListMembership } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await ListMembership.truncate()
      }

      await ListMembership.import({ createdAfter: createdAfter as string })

      return res
        .status(200)
        .json({ message: 'List memberships imported', success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: e.message, success: false })
    }
  })
