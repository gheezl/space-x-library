import React, { Fragment, lazy, Suspense } from "react"

import "./mission.css"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Missions = ({ missions }) => {
    return (
        <Fragment>
            <div className="mission-border">
                {
                    missions.map(mission => (
                        <Card props={mission.name} key={missions.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}




export default Missions;