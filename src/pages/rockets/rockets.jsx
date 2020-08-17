import React, { Fragment, lazy, Suspense } from 'react';

import './rockets.css';

const Card = lazy(() => import("../../components/card/card.jsx"))


const Rockets = ({ rockets }) => {
    return (
        <Fragment>
            <div className="mission-border">
                {
                    rockets.map(rocket => (
                        <Card props={rocket.name} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Rockets;