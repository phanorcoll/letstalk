import { FETCH_USERS } from './types.js'

export function FetchUsers() {
    const request = [
        { userID: Math.round(Math.random() * 1000000).toString(), name: 'phanorcoll', status: 'online' },
        { userID: Math.round(Math.random() * 1000000).toString(), name: 'Joseph Ruiz', status: 'away' },
        { userID: Math.round(Math.random() * 1000000).toString(), name: 'Jesus Araujo', status: 'busy' }
    ]

    return {
        type: FETCH_USERS,
        payload: request
    }
}