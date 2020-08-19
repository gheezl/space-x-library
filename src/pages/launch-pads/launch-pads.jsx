import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "./launch-pads.css"

import { LAUNCH_PADS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const LaunchPads = () => {
    const { loading, error, data } = useQuery(LAUNCH_PADS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <div className="launch-pad-border">
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