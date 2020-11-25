const request = require('supertest')
const app = require('../config/app')

describe('Content-Type Middleware', () => {
  test('Should return json content-type as default', async () => {
    app.post('/test_content_type', (req, res) => {
      res.send('')
    })

    await request(app)
      .post('/test_content_type')
      .expect('content-type', /json/)
  })
})
