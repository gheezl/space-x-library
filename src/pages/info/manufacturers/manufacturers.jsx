import React, { Fragment } from "react"

const Manufacturers = ({ manufacturers }) => {
    return (
        <Fragment>
            <h2 className="title">Manufacturers</h2>
            <div className="manufacturers">
                {manufacturers}
            </div>
        </Fragment>
    )
}

export default Manufacturers;