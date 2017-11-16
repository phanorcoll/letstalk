import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChannelIcon from '../images/channel-icon.png'
import { connect } from 'react-redux'
import { fetchCurrentChannel } from '../actions/current_channel_action.jsx'

class ChatTop extends Component {

    componentWillMount() {
        this.props.fetchCurrentChannel();
    }


    render() {
        return (
            <div className="chat-top">
                <div className="row">
                    <div className="col  d-flex align-items-center">
                        <div className="usersonline justify-content-center align-self-center">
                            {this.props.currentChannel.usersonline} users online
                    </div>
                    </div>
                    <div className="col">
                        <div className="channel-data text-right">
                            {this.props.currentChannel.name}
                            <img src={ChannelIcon} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentChannel: state.currentChannel
    }
}

export default connect(mapStateToProps, { fetchCurrentChannel })(ChatTop)