import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserPic from '../images/user-pic-chat.png'
import ChatIcon from '../images/chat-icon.png'

class ChatMessage extends Component {
    render() {
        return (
            <div className="chat-data">
                <div className="row">
                    <div className="col col-lg-1 text-right">
                        <img src={UserPic} />
                        <div className="divider"></div>
                        <img src={ChatIcon} />
                    </div>
                    <div className="col">
                        <div className="username">Joseph ruis</div>
                        <div className="publishdate">Nov. 13, 2017 @ 11:53</div>
                        <div className="divider"></div>
                        <div className="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
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