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
                            50 users online
                    </div>
                    </div>
                    <div className="col">
                        <div className="channeldata text-right">
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
    channelname: PropTypes.string.isRequired
}

export default ChatTop