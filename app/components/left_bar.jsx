import React, { Component, PropTypes } from 'react'
import GroupData from '../components/group_data.jsx'
import UserData from '../components/user_data.jsx'

export default class LeftBar extends Component {
    render() {
        return (
            <div className="col-md-2">
                <aside className="data-container">
                    <div className="title">Groups</div>
                    <GroupData groupname='Main Channel' />
                    <GroupData groupname='Golang' />
                    <div className="users-container">
                        <div className="title">Users</div>
                        <UserData username='phanor coll' userstatus='available' />
                        <UserData username='joseph ruiz' userstatus='away' />
                    </div>
                </aside>
            </div>
        )
    }
}

LeftBar.propTypes = {

}