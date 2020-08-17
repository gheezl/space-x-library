import React, { Fragment } from 'react';

import './rockets.css';


const Rockets = ({ rockets }) => {
    console.log(rockets)
    return (
        <Fragment>
            {
                rockets.map(rocket => {
                    console.log(rocket.name)
                    return (
                        <span>{rocket.name}</span>
                    )
                })
            }
        </Fragment>
    )
}

export default Rockets;