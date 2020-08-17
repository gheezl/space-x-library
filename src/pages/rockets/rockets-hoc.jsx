import React from 'react';
import { Query } from "react-apollo";

import Rockets from "./rockets.jsx"

import { ROCKET_INFO } from "../../graphql/resolvers.js"

import { client } from "../../index.js"


const RocketsHoc = () => {
    return (
        <Query query={ROCKET_INFO}>
            {({ loading, error, data }) => {
                client.writeData({
                    data: {
                        rockets: data
                    }
                })
                console.log(data)
                if (error) return "ERROR"
                if (loading) return "loading..."
                else return <Rockets rockets={data.rockets} />
            }
            }
        </Query>
    )
}


export default RocketsHoc;