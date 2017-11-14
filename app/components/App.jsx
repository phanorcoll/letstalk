import React, { Component } from 'react';
import TopBar from '../components/top_bar.jsx';
import LeftBar from '../components/left_bar.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className="container-fluid">
                    <div className="row">
                        <LeftBar />
                        <div className="col">
                            chat
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}