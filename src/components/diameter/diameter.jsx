import React, { Fragment } from "react"

import "./diameter.css"

const Diameter = ({ diameter }) => {
    return (
        <Fragment>
            <div className="right-column-second-row">
                <h2 className="title">Diameter</h2>
                <span className="title">
                    {diameter.feet} feet / {diameter.meters} meters
                    </span>
            </div>
        </Fragment>
    )
}

export default Diameter;