import { combineReducers } from 'redux'
import ChannelsReducer from './channels_reducer.jsx'
import UsersReduer from "./users_reducer.jsx";
import CurrentUserReducer from './current_user_reducer.jsx'
import CurrentChannel from './current_channel_reducer.jsx'
import History from './history_reducer.jsx'

const rootReducer = combineReducers({
    channels: ChannelsReducer,
    users: UsersReduer,
    currentUser: CurrentUserReducer,
    currentChannel: CurrentChannel,
    history: History
});

export default rootReducer;