import React, { Fragment, lazy } from 'react';
import { useQuery } from '@apollo/react-hooks'

import './rockets.css';

import { ROCKETS } from "../../graphql/querys.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Rockets = () => {
    const { loading, error, data } = useQuery(ROCKETS)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <div className="rocket-border">
                {
                    data.rockets.map(rocket => (
                        <Card data={rocket} key={rocket.name} name={"rockets"} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Rockets;