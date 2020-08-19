import React, { Fragment } from "react"

const Manufacturers = ({ manufacturers }) => {
    return (
        <Fragment>
            <div className="middle-column">
                <h2 className="title">Manufacturers</h2>
                <span className="title">
                    {manufacturers}
                </span>
            </div>
        </Fragment>
    )
}

export default Manufacturers;