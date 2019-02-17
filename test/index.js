const supertest = require('supertest')
const assert = require('assert')
const Koa = require('../index')

let app = new Koa()
app.use((req, res, next) => {
  next()
})
app.use((req, res, next) => {
  res.end('hello world')
})
let server = app.listen()
let request = supertest.agent(server)

describe('Compose', function() {
  after(function() {
    server.close()
  })

  describe('when GET /', function(done) {
    it('should say "hello world"', function(done) {
      console.log()
      // 不知道怎么写。。。
      assert.strictEqual(request.get('/'), 'hello world')
    })
  })
})
