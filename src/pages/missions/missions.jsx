import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "./mission.css"

import { MISSION_INFO } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Missions = () => {
    const { loading, error, data } = useQuery(MISSION_INFO)

    if (loading) return <Loading />
    if (error) return "ERROR"

    console.log(data)
    return (
        <Fragment>
            <div className="mission-border">
                {
                    data.missions.map(mission => (
                        <Card data={mission} key={mission.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Missions;