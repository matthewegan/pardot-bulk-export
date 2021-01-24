import { union } from 'lodash'
import express from 'express'

import { findDistinctOptions } from '@/util/db'
import { axios } from '@/util/request'
import { EmailClick, EmailTemplate, VisitorActivity } from '@/db/models'

function getEmailTemplateIds(
  data: Array<EmailClick | VisitorActivity>
): number[] {
  return data.map(({ email_template_id }) => email_template_id || 0)
}

export default express.Router().get('/import', async (req, res) => {
  try {
    if (req.query.truncate) {
      await EmailTemplate.truncate()
    }

    const [
      emailTemplateIdsFromEmailClicks,
      emailTemplateIdsFromVisitorActivity,
    ] = await Promise.all([
      EmailClick.findAll(findDistinctOptions('email_template_id')),
      VisitorActivity.findAll(findDistinctOptions('email_template_id')),
    ])

    const emailTemplateIds: number[] = union(
      getEmailTemplateIds(emailTemplateIdsFromEmailClicks),
      getEmailTemplateIds(emailTemplateIdsFromVisitorActivity)
    )

    const emailTemplates: EmailTemplate[] = []

    for (const emailTemplateId of emailTemplateIds) {
      const {
        data: { emailTemplate, err },
      }: {
        data: { emailTemplate: EmailTemplate; err: string }
      } = await axios.get(
        `emailTemplate/version/4/do/read/id/${emailTemplateId}`,
        {
          params: { archived: true, format: 'json' },
        }
      )

      if (err) {
        console.error(err)
        return res.json({ message: err, success: false })
      }

      // email.messageHtml = email.message?.html || ''
      // email.messageText = email.message?.text || ''

      emailTemplates.push(emailTemplate)
    }

    await EmailTemplate.bulkCreate(emailTemplates)

    return res
      .status(200)
      .json({ message: 'Email templates imported', success: true })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: e.message, success: false })
  }
})
