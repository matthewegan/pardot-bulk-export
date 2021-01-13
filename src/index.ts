import compression from 'compression'
import cors from 'cors'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'

import { authenticate } from '@/util/db'
import prospect from '@/routes/prospect'

const app = express()

const port = process.env.APP_PORT || 3000

app.use(compression())
app.use(cors())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: false }))

app.use('/prospect', prospect)

app.get('/', (_, res) => res.send('Pardot Bulk Export'))

authenticate(false).then(() => {
  app.listen(port, () => {
    console.info(`🦠 App running at http://localhost:${port}`)
  })
})
