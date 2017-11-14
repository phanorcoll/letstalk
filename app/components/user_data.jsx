import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

UserData.propTypes = {
    username: PropTypes.string.isRequired,
    userstatus: PropTypes.string.isRequired
}

export default UserData