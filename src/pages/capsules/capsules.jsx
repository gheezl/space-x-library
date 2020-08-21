import React, { Fragment, lazy } from 'react';
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { CAPSULES } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Capsules = () => {
    const { loading, error, data } = useQuery(CAPSULES)

    if (loading) return <Loading />
    if (error) throw Error

    return (
        <Fragment>
            <h2 className="cards-title">All Capsules</h2>
            <div className="mission-border">
                {
                    data.capsules.map(capsule => (
                        <Card data={capsule} key={capsule.id} name={"capsules"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Capsules;