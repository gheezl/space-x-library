import React, { Fragment } from "react"

const Country = ({ country }) => {
    return (
        <Fragment>
            <div className="right-column">
                <h2 className="title">Country</h2>
                <span className="title">
                    {country}
                </span>
            </div>
        </Fragment>
    )
}

export default Country;