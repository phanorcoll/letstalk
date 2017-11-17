import React, { Component } from 'react'
import MessageData from '../components/message_data.jsx'
import { connect } from 'react-redux'

class MessageList extends Component {

    renderMessages = () => {
        return this.props.history.map((msg) => {
            return <MessageData key={Math.random()} msg={msg.data.text} user={msg.sender.state.full} avatar={msg.sender.state.avatar} />
        })
    }

    render() {
        if (!this.props.history) {
            return <div>no data</div>
        }
        return (
            <div className="chat-history">
                {this.renderMessages()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(MessageList)
