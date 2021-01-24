import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { importObjectData } from '@/util/import'
import { Prospect } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await Prospect.truncate()
      }

      await importObjectData({
        createdAfter: createdAfter as string,
        insert: async (objectData) => {
          await Prospect.bulkCreate(
            objectData.map((objectModel) => {
              const prospect = objectModel as Prospect
              prospect.campaign_name = prospect.campaign?.name || null
              return prospect
            })
          )
        },
        pardotObject: 'prospect',
      })

      return res.status(200).json({
        message: 'Prospects imported',
        success: true,
      })
    } catch (e) {
      return res.status(500).json({ message: e.message, success: false })
    }
  })
