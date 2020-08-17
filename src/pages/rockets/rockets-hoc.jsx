import React from 'react';
import { Query } from "react-apollo";

import Rockets from "./rockets.jsx"
import Loading from "../../components/loading/loading.jsx"

import { ROCKET_INFO } from "../../graphql/resolvers.js"

import { client } from "../../graphql/client.js"


const RocketsHoc = () => {
    return (
        <Query query={ROCKET_INFO}>
            {({ loading, error, data }) => {
                client.writeData({
                    data: {
                        rockets: data
                    }
                })
                if (loading) return <Loading />
                else return <Rockets rockets={data.rockets} />
            }
            }
        </Query>
    )
}


export default RocketsHoc;