const Koa = require('./koa-fish')

let app = new Koa()
let router = require('./router/router')

app.use(router('/a/b', async (next, req, res) => {
  console.log(req.url)
  res.end(req.url)
}))

app.use(async (next, req, res) => {
  res.write('hello')
  await next()
  res.write('word')
  res.end()
})
app.use(async (next, req,res) => {
  res.write('------')
  next()
})
app.use(async (next, req,res) => {
  // console.log(req.headers)
  res.write(JSON.stringify(req.headers))
})

app.listen(8089)
