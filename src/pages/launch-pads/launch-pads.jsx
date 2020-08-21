import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { LAUNCH_PADS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const LaunchPads = () => {
    const { loading, error, data } = useQuery(LAUNCH_PADS)

    if (loading) return <Loading />
    if (error) throw Error

    return (
        <Fragment>
            <h2 className="cards-title">All Launch Pads</h2>
            <div className="mission-border">
                {
                    data.launchpads.map(launchpad => (
                        <Card data={launchpad} key={launchpad.name} name={"launchpads"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default LaunchPads;