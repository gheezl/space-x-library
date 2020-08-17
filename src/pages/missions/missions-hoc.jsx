import React from 'react';
import { Query } from "react-apollo";

import Missions from "./missions.jsx"
import Loading from "../../components/loading/loading.jsx"

import { MISSION_INFO } from "../../graphql/resolvers.js"

import { client } from "../../graphql/client.js"


const MissionsHoc = () => {
    return (
        <Query query={MISSION_INFO}>
            {({ loading, error, data }) => {
                client.writeData({
                    data: {
                        missions: data
                    }
                })
                if (loading) return <Loading />
                else return <Missions missions={data.missions} />
            }
            }
        </Query>
    )
}


export default MissionsHoc;