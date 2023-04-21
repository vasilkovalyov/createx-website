const express = require('express')
const next = require('next')
const cors = require('cors')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000

;(async () => {
  try {
    await app.prepare()

    const server = express()
    server.use(bodyParser.json())
    server.use(cors({ credentials: true, origin: process.env.NEXT_PUBLIC_STRAPI_API }))
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

    server.get('*', (req, res, next) => {
      return handle(req, res)
    })
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log('server ready!!!')
    })
  } catch (e) {
    process.exit(1)
  }
})()
