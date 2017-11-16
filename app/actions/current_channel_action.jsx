import { FETCH_CURRENT_CHANNEL } from './types.js'

//fetch the current channel
//TODO - from PubNub API
export function fetchCurrentChannel() {
    const request = 
        {
            "id": 'd58s',
            "name": "reactjs",
            "usersonline": 50
        }
    return {
        type: FETCH_CURRENT_CHANNEL,
        payload: request
    }
}