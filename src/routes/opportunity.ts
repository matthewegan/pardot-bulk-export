import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { Opportunity } from '@/db/models'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await Opportunity.truncate()
      }

      await Opportunity.import({
        createdAfter: createdAfter as string,
        dataMap: (objectData) =>
          objectData.map((objectModel) => {
            const opportunity = objectModel as Opportunity
            opportunity.campaign_id = opportunity.campaign?.id || 0
            opportunity.campaign_name = opportunity.campaign?.name || null
            opportunity.prospect_id = opportunity.prospects?.prospect.id || 0
            return opportunity
          }),
      })

      return res
        .status(200)
        .json({ message: 'Opportunities imported', success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ message: e.message, success: false })
    }
  })
