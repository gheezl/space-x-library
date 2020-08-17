import React, { Fragment } from 'react';
import { Link } from "react-router-dom"

import './homepage.css';


const HomePage = () => {
    return (
        <Fragment>
            <div className="Links">
                <div className="rockets">
                    <Link to="/rockets" >
                        <span>Rockets</span>
                    </Link>
                </div>
                <div className="rockets">
                    <Link to="/missions" >
                        <span>Missions</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;