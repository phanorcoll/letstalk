import React, { Component } from 'react'
import ChannelData from '../components/channel_data.jsx'
import { connect } from 'react-redux'
import { fetchChannels } from '../actions/channels_action.jsx'

class ChannelList extends Component {


    componentWillMount() {
        this.props.fetchChannels();
    }

    renderChannels = () => {
        return _.map(this.props.channels, channel => {
            return <ChannelData key={channel.id} name={channel.name} />
        })
    }

    render() {
        return (
            <div>
                {this.renderChannels()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        channels: state.channels
    }
}
export default connect(mapStateToProps, { fetchChannels })(ChannelList);