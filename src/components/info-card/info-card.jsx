import React, { Fragment } from "react"

import "./info-card.css"

const InfoCard = ({ info, name, position, link }) => {
    return (
        <Fragment>
            <div className={position} >
                <div className="info-card-border-color">
                    <h2 className="title">{name}</h2>
                    {
                        link
                            ? (
                                <span className="title">
                                    <a href={link}>See the {name} page</a>
                                </span>
                            )
                            : (
                                <span className="title">
                                    {info}
                                </span>
                            )
                    }
                </div>
            </div>
        </Fragment>
    )
}

// className={position}

export default InfoCard;