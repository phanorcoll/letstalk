import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/send_message.jsx'

class ChatForm extends Component {

    ChatEngine = null
    myChat = null

    componentWillMount() {
        this.ChatEngine = ChatEngineCore.create({
            publishKey: 'pub-c-56398d77-343f-46e8-a461-74574e3ad8ed',
            subscribeKey: 'sub-c-c641c824-ca39-11e7-9178-bafd478c18bc'
        });


        // connect to ChatEngine with our generated user
        this.ChatEngine.connect('123pc', { full: 'phanorcoll' });
    }

    componentDidMount() {
        // when ChatEngine is booted, it returns your new User as `data.me`
        this.ChatEngine.on('$.ready', (data) => {

            // create a new ChatEngine Chat
            this.myChat = new this.ChatEngine.Chat('chatengine-app');

        });
    }

    onsubmit = (e) => {
        e.preventDefault()
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }

        let messageObj = {
            "data":
                { "text": "another test" },
            "sender": "1510774839722",
            "event": "message",
            "chatengineSDK": "0.8.4"
        }

        this.myChat.emit('message', {
            text: message
        });
        //this.props.sendMessage(message);
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

function mapStateToProps(state) {
    return {
        history: history
    }
}
export default connect(mapStateToProps, { sendMessage })(ChatForm)