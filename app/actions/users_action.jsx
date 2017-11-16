import { FETCH_USERS } from './types.js'

//fetch users of the channels
//TODO - from PubNub API
export function fetchUsers() {
    const request = [
        {
            "userId": 's1',
            "name": "phanoroll",
            "status": 'online'
        },
        {
            "userId": 's2',
            "name": "josephruiz",
            "status": 'busy'
        }
    ]

    return {
        type: FETCH_USERS,
        payload: request
    }
}