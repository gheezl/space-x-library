import React, { Fragment, lazy } from "react"
import { useQuery } from '@apollo/react-hooks'

import "./launches.css"

import { LAUNCHES } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES)

    if (loading) return <Loading />
    if (error) return "ERROR"

    console.log(data)
    return (
        <Fragment>
            <h2 className="launches">All Launches</h2>
            <div className="launches-border">
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