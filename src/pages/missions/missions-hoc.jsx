import React from 'react';
import { Query } from "react-apollo";

import Missions from "./missions.jsx"

import { MISSION_INFO } from "../../graphql/resolvers.js"

import { client } from "../../index.js"


const MissionsHoc = () => {
    return (
        <Query query={MISSION_INFO}>
            {({ loading, error, data }) => {
                client.writeData({
                    data: {
                        missions: data
                    }
                })
                console.log(data)
                if (error) return "ERROR"
                if (loading) return "loading..."
                else return <Missions missions={data.missions} />
            }
            }
        </Query>
    )
}


export default MissionsHoc;