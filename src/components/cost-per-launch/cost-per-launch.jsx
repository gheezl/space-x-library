import React, { Fragment } from "react"

const CostPerLaunch = ({ costPerLaunch }) => {
    return (
        <Fragment>
            <h2 className="title">Cost Per Launch</h2>
            <div className="middle-column">
                <span>
                    $ {costPerLaunch}
                </span>
            </div>
        </Fragment>
    )
}

export default CostPerLaunch;