import { FETCH_CURRENT_USER } from './types.js'

export function FetchCurrentUser() {
    const request = {
        userID: Math.round(Math.random() * 1000000).toString(),
        name: 'phanorcoll',
        status: 'online'
    }


    return {
        type: FETCH_CURRENT_USER,
        payload: request
    }
}