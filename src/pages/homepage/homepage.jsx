import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { useMutation } from '@apollo/react-hooks'

import './homepage.css';

import { client, cache } from "../../graphql/client.js"


const HomePage = () => {
    return (
        <Fragment>
            <div className="links">
                <div className="link">
                    <Link to="/rockets" >
                        <span>Rockets</span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/missions" >
                        <span>Missions</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;