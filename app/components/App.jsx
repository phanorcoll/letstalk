import React, { Component } from 'react'
import TopBar from '../containers/top_bar.jsx'
import LeftBar from '../components/left_bar.jsx'
import RightSide from '../components/right_side.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className="container-fluid">
                    <div className="row">
                        <LeftBar />
                        <RightSide />
                    </div>
                </div>
                {/*  <footer className="text-center">
                    <a href="http://www.phanorcoll.com">Phanor Coll 2017</a>
                </footer> */}
            </div>
        );
    }
}