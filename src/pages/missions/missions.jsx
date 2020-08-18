import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "./mission.css"

import { MISSION_INFO } from "../../graphql/resolvers.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Missions = () => {
    const { loading, error, data } = useQuery(MISSION_INFO)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <div className="mission-border">
                {
                    data.missions.map(mission => (
                        <Card props={mission.name} key={mission.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Missions;