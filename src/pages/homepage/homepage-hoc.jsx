import React, { Fragment } from "react"
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost"

import "./homepage.css"

import HomePage from "./homepage.jsx"

import { GET_ROCKETS } from "../../graphql/resolvers.js"

const ADD_ROCKETS = gql`
    mutation Rockets {
        rockets @client
    }
`

const HomePageHoc = () => {
    const [addRockets, { data }] = useMutation(ADD_ROCKETS)
    console.log(addRockets)

    return (
        <Fragment>
            <HomePage homepageMutation={addRockets} />
        </Fragment>
    )
}

export default HomePageHoc;