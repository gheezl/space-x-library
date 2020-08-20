import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "./mission.css"

import { MISSIONS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Missions = () => {
    const { loading, error, data } = useQuery(MISSIONS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <h2 className="cards-title">All Missions</h2>
            <div className="mission-border">
                {
                    data.missions.map(mission => (
                        <Card data={mission} key={mission.name} name={"missions"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Missions;