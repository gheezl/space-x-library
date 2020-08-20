import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { DRAGONS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const LandPads = () => {
    const { loading, error, data } = useQuery(DRAGONS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <h2 className="cards-title">All Dragons</h2>
            <div className="mission-border">
                {
                    data.dragons.map(dragon =>
                        (
                            <Card data={dragon} key={dragon.name} name="dragons" />
                        ))
                }
            </div>
        </Fragment>
    )
}

export default LandPads;