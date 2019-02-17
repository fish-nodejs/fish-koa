const http = require('http')
const compose = require('fn-onion')

class Koa {
  constructor(){
    this._middleware = []
  }
  use(fn){
    this._middleware.push(fn)
  }
  listen(){
    let cb = compose(this._middleware)
    let server = http.createServer(cb)
    // console.log(server)
    server.listen(...arguments)
    return server
  }
}

module.exports = Koa
