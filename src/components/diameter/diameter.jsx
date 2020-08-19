import React, { Fragment } from "react"

const Diameter = ({ diameter }) => {
    return (
        <Fragment>
            <div className="right-column-second-row">
                <h2 className="title">Diameter</h2>
                <span>
                    {diameter.feet} feet
                </span>
                <span>
                    {diameter.meters} meters
                </span>
            </div>
        </Fragment>
    )
}

export default Diameter;