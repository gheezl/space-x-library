import { gql } from "apollo-boost"

export const typeDefs = gql`
    extend type Mutation {
        Rockets: array!
    }
`

export const GET_ROCKETS = gql`
    {
        rockets @client
    }
`

export const resolvers = {
    Mutation: {
        rockets: (_root, _args, { cache }) => {
            const { rockets } = cache.readQuery({
                query: GET_ROCKETS
            })

            cache.writeQuery({
                query: GET_ROCKETS,
                data: { rockets: rockets + "hi" }
            })

            return "hello"
        }
    }
}