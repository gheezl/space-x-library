import { gql } from "apollo-boost"

export const ROCKETS = gql`
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

export const MISSIONS = gql`
    {
    missions {
        description
        name
        wikipedia
        manufacturers
  }
    }
`

export const LAUNCH_PADS = gql`
    {
    launchpads {
    location {
      region
    }
    details
    name
    wikipedia
    successful_launches
    status
  }
}
`

export const LAUNCHES = gql`
    {
    launches {
        details
        launch_success
        launch_year
        mission_name
        rocket {
          rocket_name
        }
        upcoming
    }
}
`