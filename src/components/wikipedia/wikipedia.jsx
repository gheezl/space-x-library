import React, { Fragment } from "react"


const Wikipedia = ({ wikipedia }) => {
    return (
        <Fragment>
            <div className="wikipedia-link">
                <a href={wikipedia}>wikipedia page</a>
            </div>
        </Fragment>
    )
}

export default Wikipedia;