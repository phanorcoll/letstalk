import { FETCH_HISTORY } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_HISTORY:
            console.log('payload ',action.payload)
            return [
                ...state, action.payload
            ]
        default:
            return state;
    }
}