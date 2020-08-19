import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "../rocket-info/info.css"

const InfoCard = lazy(() => import("../../components/info-card/info-card.jsx"))

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
                                <InfoCard info={data.data.description} name="Description" position="left-column" />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column" />
                                <InfoCard info={data.data.manufacturers} name="Manufacturers" position="right-row" />
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