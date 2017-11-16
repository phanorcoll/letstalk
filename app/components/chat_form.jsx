import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatForm extends Component {

    onsubmit = (e) => {
        e.preventDefault()
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }

        const messageObj = [{
            Who: 'this.props.currentuser.name',
            What: message,
            When: new Date().valueOf(),
        }];
        console.log(messageObj);
        this.refs.txtMessage.value = '';
    }

    render() {
        return (
            <div className="chat-input">
                <form className="form-group" onSubmit={this.onsubmit}>
                    <input type="text" ref="txtMessage" name="message" className="form-group-item" placeholder="type your message and press ENTER!" />
                </form>
            </div>
        )
    }
}


export default ChatForm