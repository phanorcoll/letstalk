import { FETCH_CHANNELS } from './types.js'

export function FetchChannels() {
    const request = [
        { name: 'channel1' },
        { name: 'reactjs' },
        { name: 'angular' }
    ]

    return {
        type: FETCH_CHANNELS,
        payload: request
    }
}