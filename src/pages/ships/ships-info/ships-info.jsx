import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const ShipsInfo = ({ data }) => {
    console.log(data)
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
                                <InfoCard info={data.data.home_port} name="Home Port" position="Left-column" />
                                <InfoCard link={data.data.url ? (data.data.url) : (null)} name="Ship Url" position="middle-column" />
                                <InfoCard info={data.data.year_built ? (data.data.year_built) : ("No year documented")} name="Year Built" position="right-column" />
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

export default connect(mapStateToProps)(ShipsInfo);