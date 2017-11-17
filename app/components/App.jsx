import React, { Component } from 'react'
import TopBar from '../containers/top_bar.jsx'
import LeftBar from '../components/left_bar.jsx'
import RightSide from '../components/right_side.jsx'
import { connect } from 'react-redux'
import { fetchHistory } from '../actions/fetch_history.jsx'
class App extends Component {

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

            let me = data.me;
            console.log('ME ',me)
            // create a new ChatEngine Chat
            this.myChat = new this.ChatEngine.Chat('chatengine-app');

            this.myChat.on('$.connected', () => {

                // search for 50 old `message` events
                this.myChat.search({
                    reverse: true,
                    event: 'message',
                    limit: 20
                }).on('message', (message) => {
                    // when messages are returned, render them like normal messages
                    this.props.fetchHistory(message)

                });

                this.myChat.on('message', (message) => {
                    this.props.fetchHistory(message)
                });

            });

        });
    }

    render() {
        return (
            <div>
                <TopBar />
                <div className="container-fluid">
                    <div className="row">
                        <LeftBar />
                        <RightSide />
                    </div>
                </div>
                {/*  <footer className="text-center">
                    <a href="http://www.phanorcoll.com">Phanor Coll 2017</a>
                </footer> */}
            </div>
        );
    }
}

export default connect(null, { fetchHistory })(App)