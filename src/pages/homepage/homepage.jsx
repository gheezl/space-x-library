import React, { Fragment } from "react"

import "./homepage.css"


const HomePage = ({ homepageMutation }) => {
    return (
        <Fragment>
            <h1 onClick={homepageMutation}>hi</h1>
        </Fragment>
    )
}


export default HomePage;