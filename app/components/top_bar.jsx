import React, { Component, PropTypes } from 'react'
import LetstalkLogo from '../images/letstalk_logo.png';
import NoProfilePic from '../images/no-profile-pic.png';

export default class TopBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top topbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand">
                        <img src={LetstalkLogo} className="d-inline-block align-top" alt="" />
                        Letstalk!
                    </span>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <img src={NoProfilePic} className="d-inline-block align-top" alt="" />
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phanor Coll</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown10">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

TopBar.propTypes = {

}