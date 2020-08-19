import React, { Fragment } from "react"


const Description = ({ description }) => {
    return (
        <Fragment>
            <h2 className="title">Description</h2>
            <div className="left-column">
                <span>
                    {description}
                </span>
            </div>
        </Fragment>
    )
}


export default Description;