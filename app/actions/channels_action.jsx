import { FETCH_CHANNELS } from './types.js'

//fetch the list of channels
//TODO - from PubNub API
export function fetchChannels() {
    const request = [
        {
            "id": 164707,
            "name": "reactjs",
            "usersonline": 50
        },
        {
            "id": 164660,
            "name": "angular",
            "usersonline": 42
        }
    ]

    return {
        type: FETCH_CHANNELS,
        payload: request
    }
}