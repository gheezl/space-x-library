import React from 'react';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost"

import Rockets from "./rockets.jsx"

import { GET_ROCKETS } from "../../graphql/resolvers.js"


const RocketsHoc = () => {
    return (
        <Query query={GET_ROCKETS}>
            {({ loading, error, data }) => {
                if (loading) return "loading..."
                else return <Rockets rockets={data.rockets} />
            }
            }
        </Query>
    )
}


export default RocketsHoc;