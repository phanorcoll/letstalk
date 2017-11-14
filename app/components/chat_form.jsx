import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatForm extends Component {
    render() {
        return (
            <div className="chat-input">
                <form className="form-group">
                    <input type="text" name="message" className="form-group-item" placeholder="type your message and press ENTER!" />
                </form>
            </div>
        )
    }
}

ChatForm.propTypes = {

}

export default ChatForm