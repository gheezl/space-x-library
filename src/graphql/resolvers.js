import { gql } from "apollo-boost"
import { cache } from "./client"

// type definitions

export const typeDefs = gql`
    extend type Mutation {
        ToggleLibraryChange: Boolean!
    }
`

// client references

// querys from the database

export const ROCKET_INFO = gql`
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

export const MISSION_INFO = gql`
    {
    missions {
        description
        id
        name
        wikipedia
        manufacturers
  }
    }
`

// resolvers

const query = gql`
    query toggleLibrary {
        toggleLibrary @client
    }
`



export const resolvers = {
    Mutation: {
        toggleLibraryChange: ({ cache }) => {
            const { toggleLibrary } = cache.readQuery({ query: query })

            cache.writeQuery({ query: query, data: !toggleLibrary })
        }
    }
}
