import { gql } from "apollo-boost"

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
