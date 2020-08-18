import React, { Fragment } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "./info.css"


const Info = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            <div className="information">
                <h2 className="title">Description</h2>
                <div className="description">
                    <span>
                        {data.data.description}
                    </span>
                </div>
                <div className="wikipedia-link">
                    <a href={data.data.wikipedia}>wikipedia page</a>
                </div>
                <h2 className="title">Manufacturers</h2>
                <div className="manufacturers">
                    {data.data.manufacturers}
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    data: SelectData
})

export default connect(mapStateToProps)(Info);