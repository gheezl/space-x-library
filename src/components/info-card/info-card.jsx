import React, { Fragment } from "react"

const InfoCard = ({ info, name, position, link }) => {
    return (
        <Fragment>
            <div className="info-card">
                <div className={position}>
                    <h2 className="title">{name}</h2>
                    {
                        link
                            ? (
                                <span className="title">
                                    <a href={link}>Go to {name} page</a>
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

export default InfoCard;