import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GroupData extends Component {
    render() {
        return (
            <div className="group-data">
                <div className="circle"></div><div>{this.props.groupname}</div>
            </div>
        )
    }
}

GroupData.propTypes = {
    groupname: PropTypes.string.isRequired
}

export default GroupData