import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChannelIcon from '../images/channel-icon.png'

class ChatTop extends Component {
    render() {
        return (
            <div className="chat-top">
                <div className="row">
                    <div className="col  d-flex align-items-center">
                        <div className="usersonline justify-content-center align-self-center">
                            {this.props.usersonline} users online
                    </div>
                    </div>
                    <div className="col">
                        <div className="channel-data text-right">
                            {this.props.channelname}
                            <img src={ChannelIcon} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatTop.propTypes = {
    channelname: PropTypes.string.isRequired,
    usersonline: PropTypes.number.isRequired
}

export default ChatTop