import express from 'express'

import { findDistinctOptions } from '@/util/db'
import { axios } from '@/util/request'
import { Email, VisitorActivity } from '@/db/models'

export default express.Router().get('/import', async (req, res) => {
  try {
    if (req.query.truncate) {
      await Email.truncate()
    }

    const emailIds = ((await VisitorActivity.findAll(
      findDistinctOptions('email_id')
    )) as Partial<VisitorActivity[]>).map(
      (visitorActivity) => visitorActivity?.email_id
    )

    const emails: Email[] = []

    for (const emailId of emailIds) {
      const {
        data: { email, err },
      }: { data: { email: Email; err: string } } = await axios.get(
        `email/version/4/do/read/id/${emailId}`,
        {
          params: { format: 'json' },
        }
      )

      if (err) {
        console.error(err)
        return res.json({ message: err, success: false })
      }

      email.messageHtml = email.message?.html || ''
      email.messageText = email.message?.text || ''

      emails.push(email)
    }

    await Email.bulkCreate(emails)

    return res.status(200).json({ message: 'Emails imported', success: true })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: e.message, success: false })
  }
})
