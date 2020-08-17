import React from 'react';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost"

import Rockets from "./rockets.jsx"

import { ROCKET_INFO } from "../../graphql/resolvers.js"


const RocketsHoc = () => {
    return (
        <Query query={ROCKET_INFO}>
            {({ loading, error, data }) => {
                console.log(data)
                if (loading) return "loading..."
                else return <Rockets rockets={data.rockets} />
            }
            }
        </Query>
    )
}


export default RocketsHoc;