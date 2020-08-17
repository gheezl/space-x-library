import React, { Fragment } from "react"

import "./card.css"


const Card = ({ props }) => {
    return (
        <Fragment>
            <div className="card-border">
                <span>{props}</span>
            </div>
        </Fragment>
    )
}

export default Card;