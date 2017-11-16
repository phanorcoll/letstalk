import React, { Component } from 'react'
import UserPic from '../images/users-pic.jpeg'

class UserData extends Component {
    render() {
        return (
            <div className="users-data">
                <img src={UserPic} />
                <div className="username">
                    {this.props.username}
                    <div className="userstatus">{this.props.userstatus}</div>
                </div>
            </div>
        )
    }
}

export default UserData