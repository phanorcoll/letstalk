import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatTop from '../containers/channel_info.jsx'
import ChatForm from '../containers/chat_form.jsx'
import History from '../containers/message_list.jsx'
export default class RightSide extends Component {
    
    render() {
        return (
            <div className="col">
                <div className="data-container chat">
                    <ChatTop />
                    <div className="chat-wrapper">
                        <History />
                    </div>
                    <ChatForm  />
                </div>
            </div>
        )
    }
}