import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { GraphQLSchema } from 'graphql'

export interface InitializeOptions {
  cors: boolean
  debug: boolean
  introspection: boolean
  playground: boolean
  schema: GraphQLSchema
}

export const getSchema = async () => buildSchema({
  resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
  emitSchemaFile: true,
})

export async function initialize(options?: InitializeOptions) {
  const schema = await getSchema()

  return new ApolloServer({
    ...options,
    schema,
  })
}