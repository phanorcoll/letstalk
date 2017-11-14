import React, { Component, PropTypes } from 'react'
import GroupData from '../components/group_data.jsx'

export default class LeftBar extends Component {
    render() {
        return (
            <div className="col-md-2">
                <aside className="data-container">
                    <div className="title">Groups</div>
                    <GroupData groupname='Main Channel' />
                    <GroupData groupname='Golang' />
                </aside>
            </div>
        )
    }
}

LeftBar.propTypes = {

}