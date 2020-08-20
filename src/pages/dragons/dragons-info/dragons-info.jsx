import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const DragonsInfo = ({ data }) => {
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
                                <InfoCard info={data.data.active ? ("Is active") : ("Is not active")} name="Status" position="middle-column" />
                                <InfoCard info={data.data.crew_capacity} name="Crew Capacity" position="right-column" />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column-second-row" />
                                <InfoCard info={`${data.data.diameter.meters} meters`} name="Diameter" position="right-column-second-row" />
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

export default connect(mapStateToProps)(DragonsInfo);