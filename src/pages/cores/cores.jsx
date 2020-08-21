import React, { Fragment, lazy } from 'react';
import { useQuery } from '@apollo/react-hooks'

import "../missions/mission.css"

import { CORES } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Cores = () => {
    const { loading, error, data } = useQuery(CORES)

    if (loading) return <Loading />
    if (error) throw Error

    return (
        <Fragment>
            <h2 className="cards-title">All Cores</h2>
            <div className="mission-border">
                {
                    data.cores.map(core => (
                        <Card data={core} key={core.id} name={"cores"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Cores;