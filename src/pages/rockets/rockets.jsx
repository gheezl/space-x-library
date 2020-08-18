import React, { Fragment, lazy } from 'react';
import { useQuery } from '@apollo/react-hooks'

import './rockets.css';

import { ROCKET_INFO } from "../../graphql/resolvers.js"
import Loading from "../../components/loading/loading"

const Card = lazy(() => import("../../components/card/card.jsx"))


const Rockets = () => {
    const { loading, error, data } = useQuery(ROCKET_INFO)

    if (loading) return <Loading />
    if (error) return "ERROR"

    return (
        <Fragment>
            <div className="rocket-border">
                {
                    data.rockets.map(rocket => (
                        <Card props={rocket.name} key={rocket.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Rockets;