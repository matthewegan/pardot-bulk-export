import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { EmailClick } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await EmailClick.truncate()
      }

      await EmailClick.import({
        createdAfter: createdAfter as string,
        queryParams: { sort_by: '' },
      })

      return res
        .status(200)
        .json({ message: 'Email clicks imported', success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: e.message, success: false })
    }
  })
