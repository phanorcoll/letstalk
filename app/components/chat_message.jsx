import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPic from '../images/user-pic-chat.png'
import ChatIcon from '../images/chat-icon.png'

class ChatMessage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        //console.log(this.props.message)
        return (
            <div className="chat-data">
                <div className="row">
                    <div className="col col-lg-1 text-right">
                        <img src={UserPic} />
                        <div className="divider"></div>
                        <img src={ChatIcon} />
                    </div>
                    <div className="col">
                        <div className="username">{this.props.message.Who}</div>
                        <div className="publishdate">{this.props.message.When}</div>
                        <div className="divider"></div>
                        <div className="message">
                            {this.props.message.What}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatMessage.propTypes = {

}

export default ChatMessage