import React, { Component } from 'react'
import ChatTop from '../components/chat_top.jsx'

class RightSide extends Component {
    render() {
        return (
            <div className="col">
                <div className="data-container chat">
                    <ChatTop channelname='General channel' />
                    chat
                </div>
            </div>
        )
    }
}

export default RightSide