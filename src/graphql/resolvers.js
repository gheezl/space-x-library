import { gql } from "apollo-boost"

// type definitions

export const typeDefs = gql`
    extend type Mutation {
        Rockets(rocket: array!): rocket!
    }
`

// client references

export const GET_ROCKETS = gql`
    {
        rockets @client
    }
`

// querys from the database

const ROCKET_INFO = gql`
    {
        rockets {
        active
        company
        cost_per_launch
        country
        description
        diameter {
            feet
            meters
        }
        name
        wikipedia
        }
    }
`

// resolvers

export const resolvers = {
    Mutation: {
        AddRockets: (_root, { item }, { cache }) => {
            const { rockets } = cache.readQuery({
                query: GET_ROCKETS
            })

            cache.writeQuery({
                query: GET_ROCKETS,
                data: { rockets: ROCKET_INFO }
            })

            return rockets;
        }
    }
}