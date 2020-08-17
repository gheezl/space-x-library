import React, { Fragment } from 'react';

import './rockets.css';


const Rockets = ({ rockets }) => {
    console.log(rockets)
    return (
        <Fragment>
            {
                rockets.map(rocket => {
                    return (
                        <span>{rocket}</span>
                    )
                })
            }
        </Fragment>
    )
}

export default Rockets;