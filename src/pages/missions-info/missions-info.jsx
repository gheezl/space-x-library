import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "../rocket-info/info.css"

const Wikipedia = lazy(() => import("../../components/wikipedia/wikipedia.jsx"))
const Description = lazy(() => import("../../components/description/description.jsx"))
const Manufacturers = lazy(() => import("../../components/manufacturers/manufacturers.jsx"))

const MissionsInfo = ({ data }) => {
    return (
        <Fragment>
            {
                data.data
                    ? (
                        <Fragment>
                            <h1 className="name">
                                {data.data.name}
                            </h1>
                            <div className="information">
                                <Description description={data.data.description} />
                                <Wikipedia wikipedia={data.data.wikipedia} />
                                <Manufacturers manufacturers={data.data.manufacturers} />
                            </div>
                        </Fragment>
                    )
                    : (
                        null
                    )
            }
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    data: SelectData
})

export default connect(mapStateToProps)(MissionsInfo);