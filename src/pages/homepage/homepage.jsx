import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom"

import './homepage.css';


const HomePage = () => {
    let [toggle, setToggle] = useState(false)

    const onClickFunction = () => {
        setToggle(!toggle)
    }

    return (
        <Fragment>
            {
                toggle
                    ?
                    (
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
                    )
                    : (
                        <div className="welcome">
                            <span >
                                Welcome to the Space X Library.
                            </span>
                            <span onClick={onClickFunction}>
                                Go to Library
                            </span>
                        </div>
                    )
            }

        </Fragment>
    )
}

export default HomePage;