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

export const LAND_PADS = gql`
    {
    landpads {
        details
        full_name
        location {
            region
        }
        status
        successful_landings
        wikipedia
        }
    }
`

export const DRAGONS = gql`
    {
    dragons {
        active
        crew_capacity
        description
        diameter {
          meters
        }
        name
        wikipedia
    }
    }
`

export const SHIPS = gql`
    {
    ships {
        active
        name
        status
        url
        year_built
        home_port
    }
}

`

export const CAPSULES = gql`
{
  capsules {
    dragon {
      name
    }
    landings
    missions {
      name
    }
    status
    type
    reuse_count
    original_launch
    id
  }
}
`

export const CORES = gql`
    {
    cores {
       id
        missions {
        name
        }
        status
        water_landing
        reuse_count
        original_launch
    }
}
`