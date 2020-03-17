import * as dotenv from 'dotenv'

dotenv.config()

export default {
  port: <string>process.env.PORT,
  env: <string>process.env.NODE_ENV
}
