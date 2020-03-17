import * as Koa from 'koa'
import { Server } from 'http'
import * as helmet from 'koa-helmet'
import * as bodyParser from 'koa-bodyparser'

const pino = require('koa-pino-logger')()

export class AppServer {
  private app: Koa
  private server!: Server

  constructor(app: Koa) {
    this.app = app
  }

  public listen(port: number): Server {
    this.server = this.app.listen(port)
    return this.server
  }

  public getServer(): Server {
    return this.server
  }
}

export function createServer(): AppServer {
  const app = new Koa()
  const appServer = new AppServer(app)

  // register middlewares
  app.use(helmet())
  app.use(pino)
  app.use(bodyParser())

  return appServer
}
