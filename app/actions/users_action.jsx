import { FETCH_USERS } from './types.js'

//fetch users of the channels
//TODO - from PubNub API
export function fetchUsers() {
    const request = [
        {
            "userId": Math.random(),
            "name": "phanoroll",
            "status": 'online'
        },
        {
            "userId": Math.random(),
            "name": "josephruiz",
            "status": 'busy'
        }
    ]

    return {
        type: FETCH_USERS,
        payload: request
    }
}