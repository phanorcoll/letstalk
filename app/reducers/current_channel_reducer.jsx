import { FETCH_CURRENT_CHANNEL } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CURRENT_CHANNEL:
            return action.payload;
        default:
            return state;
    }
}