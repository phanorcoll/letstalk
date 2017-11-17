import { SEND_MESSAGE } from './types.js'

export function sendMessage(messageObj) {
    let request = messageObj

    console.log('sending message ', request)
    return {
        type: SEND_MESSAGE,
        payload: request
    }
}