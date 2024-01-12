import { extendType, makeSchema, objectType } from 'nexus'
import * as QueryTypes from './Query'
import * as TaskTypes from './Task'
import path from 'path'
const schema = makeSchema({
  types: [QueryTypes, TaskTypes],
  outputs: {
    schema: path.join(process.cwd(), '/generated/schema.graphql'),
    typegen: path.join(process.cwd(), '/generated/types.ts'),
  },
})
export default schema
