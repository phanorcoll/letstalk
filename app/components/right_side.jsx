import React, { Component } from 'react'
import ChatTop from '../components/chat_top.jsx'
import ChatMessage from '../components/chat_message.jsx'

class RightSide extends Component {
    render() {
        return (
            <div className="col">
                <div className="data-container chat">
                    <ChatTop channelname='General channel' usersonline={100} />
                    <ChatMessage />
                </div>
            </div>
        )
    }
}

export default RightSide