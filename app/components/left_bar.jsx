import React, { Component } from 'react'
import ChannelList from '../containers/channel_list.jsx'
import UserList from '../containers/users_list.jsx'

export default class LeftBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-2">
                <aside className="data-container">
                    <div className="title">Channels</div>
                        <ChannelList />
                    <div className="users-container">
                        <div className="title">Users</div>
                        <UserList />
                    </div>
                </aside>
            </div>
        )
    }
}
