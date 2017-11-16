import React, { Component } from 'react'

class ChannelData extends Component {

    render() {
        let channel
        return (
            <div className="group-data">
                <div className="circle"></div><div>{this.props.name}</div>
            </div>
        )
    }
}

export default ChannelData