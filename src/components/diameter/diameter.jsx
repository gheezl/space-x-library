import React, { Fragment } from "react"

const Diameter = ({ diameter }) => {
    return (
        <Fragment>
            <h2 className="title">Diameter</h2>
            <div className="left-column-second-row">
                <span>
                    {diameter.feet}
                </span>
                <span>
                    {diameter.meters}
                </span>
            </div>
        </Fragment>
    )
}

export default Diameter;