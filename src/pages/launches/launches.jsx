import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { LAUNCHES } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <h2 className="cards-title">All Launches</h2>
            <div className="mission-border">
                {
                    data.launches.map(launches => (
                        <Card data={launches} key={launches.name} name={"launches"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Launches;