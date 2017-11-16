import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatTop from '../containers/channel_info.jsx'
import ChatForm from '../components/chat_form.jsx'

export default class RightSide extends Component {
    
    render() {
        return (
            <div className="col">
                <div className="data-container chat">
                    <ChatTop />
                    <div className="chat-wrapper">
                        list of messages
                    </div>
                    <ChatForm  />
                </div>
            </div>
        )
    }
}