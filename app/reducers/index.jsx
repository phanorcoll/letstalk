import { combineReducers } from 'redux'
import ChannelsReducer from './reducer_channels.jsx'
import UsersReducer from './reducer_users.jsx'

const rootReducer = combineReducers({
    channels: ChannelsReducer,
    users: UsersReducer
});

export default rootReducer;