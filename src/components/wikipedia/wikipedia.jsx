import React, { Fragment } from "react"


const Wikipedia = ({ wikipedia }) => {
    return (
        <Fragment>
            <div className="wikipedia-title" >
                <h2 className="title">Wikipedia</h2>
                <div className="wikipedia-link" >
                    <a href={wikipedia}>wikipedia page</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Wikipedia;