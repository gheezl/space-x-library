import React, { Fragment } from "react"

const Country = ({ country }) => {
    return (
        <Fragment>
            <h2 className="title">Country</h2>
            <div className="right-column">
                <span>
                    {country}
                </span>
            </div>
        </Fragment>
    )
}

export default Country;