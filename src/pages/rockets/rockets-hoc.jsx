import React from 'react';
import { Query } from "react-apollo";

import Rockets from "./rockets.jsx"
import Loading from "../../components/loading/loading.jsx"

import { ROCKET_INFO } from "../../graphql/resolvers.js"

import { cache } from "../../graphql/client.js"


const RocketsHoc = () => {
    return (
        <Query query={ROCKET_INFO}>
            {({ loading, error, data }) => {
                cache.writeData({
                    data: {
                        rockets: data
                    }
                })
                if (loading) return <Loading />
                else return <Rockets rockets={data.rockets} key={data.rockets} />
            }
            }
        </Query>
    )
}


export default RocketsHoc;