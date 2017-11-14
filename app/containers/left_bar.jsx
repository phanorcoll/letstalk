import React, { Component } from 'react'
import { connect } from 'react-redux';
import GroupData from '../components/group_data.jsx'
import UserData from '../components/user_data.jsx'
import { FetchChannels } from '../actions/fetch_channels.jsx'
import { FetchUsers } from '../actions/fetch_users.jsx'
import _ from 'lodash';

class LeftBar extends Component {
    constructor(props) {
        super(props)
        this.props.FetchChannels()
        this.props.FetchUsers()
    }

    renderChannelList = () => {
        return _.map(this.props.channels, channel => {
            return (<GroupData key={channel.name} groupname={channel.name} />)
        })
    }

    renderUserList = () => {
        return _.map(this.props.users, user => {
            return (<UserData key={user.userID} username={user.name} userstatus={user.status} />)
        })
    }

    render() {
        return (
            <div className="col-md-2">
                <aside className="data-container">
                    <div className="title">Groups</div>
                    {this.renderChannelList()}
                    <div className="users-container">
                        <div className="title">Users</div>
                        {this.renderUserList()}
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        channels: state.channels,
        users: state.users
    }
}

export default connect(mapStateToProps, { FetchChannels, FetchUsers })(LeftBar)