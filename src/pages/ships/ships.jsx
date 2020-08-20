import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { SHIPS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const LandPads = () => {
    const { loading, error, data } = useQuery(SHIPS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    console.log(data)
    return (
        <Fragment>
            <h2 className="cards-title">All Ships</h2>
            <div className="mission-border">
                {
                    data.ships.map(ships =>
                        (
                            <Card data={ships} key={ships.name} name="ships" />
                        ))
                }
            </div>
        </Fragment>
    )
}

export default LandPads;