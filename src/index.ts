import 'reflect-metadata'
import { initialize } from './server'

const PORT = process.env.PORT || 4000

void (async () => {
  const server = await initialize()

  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
})()