import React, { Fragment } from "react"


const Description = ({ description }) => {
    return (
        <Fragment>

            <div className="left-column">
                <h2 className="title">Description</h2>
                <span className="title">
                    {description}
                </span>
            </div>
        </Fragment>
    )
}


export default Description;