import { FETCH_CURRENT_USER } from './types.js'

//fetch the current user
//TODO - from PubNub API
export function fetchCurrentUser() {
    const request = {
        "userId": Math.round(Math.random() * 1000000).toString(),
        "name": "testing user",
        "status": 'online'
    }

    return {
        type: FETCH_CURRENT_USER,
        payload: request
    }
}