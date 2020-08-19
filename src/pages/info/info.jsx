import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "./info.css"

const Manufacturers = lazy(() => import("./manufacturers/manufacturers.jsx"))
const Wikipedia = lazy(() => import("./wikipedia/wikipedia.jsx"))
const Description = lazy(() => import("./description/description.jsx"))


const Info = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            <div className="information">
                <Description description={data.data.description} />
                <Wikipedia wikipedia={data.data.wikipedia} />
                {
                    data.data.manufacturers
                        ? (<Manufacturers manufacturers={data.data.manufacturers} />)
                        : (null)
                }
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    data: SelectData
})

export default connect(mapStateToProps)(Info);