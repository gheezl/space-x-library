import React from 'react';
import { Query } from "react-apollo";

import Missions from "./missions.jsx"
import Loading from "../../components/loading/loading.jsx"

import { MISSION_INFO } from "../../graphql/resolvers.js"

import { cache } from "../../graphql/client.js"


const MissionsHoc = () => {
    return (
        <Query query={MISSION_INFO}>
            {({ loading, error, data }) => {
                cache.writeData({
                    data: {
                        missions: data
                    }
                })
                if (loading) return <Loading />
                else return <Missions missions={data.missions} key={data.missions} />
            }
            }
        </Query>
    )
}


export default MissionsHoc;