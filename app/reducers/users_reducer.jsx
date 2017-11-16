import { FETCH_USERS, FETCH_CURRENT_USER } from '../actions/types'
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USERS:
            return _.mapKeys(action.payload, 'userId');
        case FETCH_CURRENT_USER:
            return action.payload
        default:
            return state;
    }
}