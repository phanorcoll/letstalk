import { FETCH_USERS } from './types.js'

export function FetchUsers() {
    const request = [
        { name: 'phanorcoll', status:'online' },
        { name: 'Joseph Ruiz', status:'away' },
        { name: 'Jesus Araujo', status:'busy' }
    ]

    return {
        type: FETCH_USERS,
        payload: request
    }
}