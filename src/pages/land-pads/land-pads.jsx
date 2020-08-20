import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { LAND_PADS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const LandPads = () => {
    const { loading, error, data } = useQuery(LAND_PADS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    console.log(data)
    return (
        <Fragment>
            <h2 className="cards-title">All Landing Pads</h2>
            <div className="mission-border">
                {
                    data.landpads.map(landpad =>
                        (
                            <Card data={landpad} key={landpad.full_name} name="landpads" />
                        ))
                }
            </div>
        </Fragment>
    )
}

export default LandPads;