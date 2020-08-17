import React, { Fragment, lazy, Suspense } from 'react';

import './rockets.css';

const Card = lazy(() => import("../../components/card/card.jsx"))


const Rockets = ({ rockets }) => {
    return (
        <Fragment>
            <div className="rocket-border">
                {
                    rockets.map(rocket => (
                        <Card props={rocket.name} key={rocket.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Rockets;