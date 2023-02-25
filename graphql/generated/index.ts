import {
  ClientOptions,
  FieldsSelection,
  GenqlError,
  GraphqlOperation,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  linkTypeMap,
} from './runtime'
import { Mutation, MutationGenqlSelection, Query, QueryGenqlSelection } from './schema'
import types from './types'

export type { FieldsSelection } from './runtime'
export { GenqlError }

export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://graphql.api.staging.niftory.com',
    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<Query, fields>
export const generateQueryOp: (
  fields: QueryGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export type MutationResult<fields extends MutationGenqlSelection> = FieldsSelection<
  Mutation,
  fields
>
export const generateMutationOp: (
  fields: MutationGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
}
