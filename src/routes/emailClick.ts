import express from 'express'

import { createdAfterMiddleware } from '@/middleware'
import { EmailClick } from '@/db/models'
import { importObjectData } from '@/util/import'

export default express
  .Router()
  .get('/import', createdAfterMiddleware, async (req, res) => {
    try {
      const { createdAfter, truncate } = req.query

      if (truncate) {
        await EmailClick.truncate()
      }

      await importObjectData({
        createdAfter: createdAfter as string,
        insertAction: async (objectData) => {
          await EmailClick.bulkCreate(
            objectData.map((objectModel) => {
              const emailClick = objectModel as EmailClick
              const { email_template_id, list_email_id } = emailClick

              emailClick.email_template_id = email_template_id || null
              emailClick.list_email_id = list_email_id || null

              return emailClick
            })
          )
        },
        pardotObject: 'emailClick',
        queryParams: { sort_by: '' },
      })

      return res
        .status(200)
        .json({ message: 'Email clicks imported', success: true })
    } catch (e) {
      console.error({ e })
      return res.status(500).json({ message: e.message, success: false })
    }
  })
