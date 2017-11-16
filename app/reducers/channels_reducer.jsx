import { FETCH_CHANNELS } from '../actions/types'
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CHANNELS:
        //console.log(action.payload)
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}