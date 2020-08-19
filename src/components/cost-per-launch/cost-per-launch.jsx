import React, { Fragment } from "react"

const CostPerLaunch = ({ costPerLaunch }) => {
    return (
        <Fragment>

            <div className="middle-column">
                <h2 className="title">Cost Per Launch</h2>
                <span className="title">
                    $ {costPerLaunch}
                </span>
            </div>
        </Fragment>
    )
}

export default CostPerLaunch;