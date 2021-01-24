import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { VisitorActivity } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await VisitorActivity.truncate()
      }

      await VisitorActivity.import(createdAfter as string)

      return res
        .status(200)
        .json({ message: 'Visitor activities imported', success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: e.message, success: false })
    }
  })
