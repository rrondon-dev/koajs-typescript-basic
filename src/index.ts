import { createServer, AppServer } from './server'
import config from './config'

async function init() {
  const { port } = config

  try {
    if (!port) {
      process.exit(1)
    }

    const PORT: number = parseInt(port)

    const app = createServer()
    app.listen(PORT)

    console.info(`Application running on port: ${PORT}`)
  } catch (error) {
    console.error(error, 'An error occurred while initializing application.')
  }
}

init()
