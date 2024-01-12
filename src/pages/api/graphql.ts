import Cors from 'micro-cors'

import { ApolloServer } from 'apollo-server-micro'
import { PageConfig } from 'next'
import schema from '../../schema'

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors()

const server = new ApolloServer({
  schema,
})

const startServer = server.start()

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
})
