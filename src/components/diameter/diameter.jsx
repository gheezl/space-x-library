import React, { Fragment } from "react"

import "./diameter.css"

const Diameter = ({ diameter }) => {
    return (
        <Fragment>
            <div className="right-column-second-row">

                <div className="diameter-data">
                    <h2 className="title">Diameter</h2>
                    <span className="diameter">
                        {diameter.feet} feet
                    </span>
                    <span className="diameter" >
                        {diameter.meters} meters
                    </span>
                </div>

            </div>
        </Fragment>
    )
}

export default Diameter;