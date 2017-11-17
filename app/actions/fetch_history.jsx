import { FETCH_HISTORY } from './types.js'

export function fetchHistory(message) {
    
    let request = message
    
    //console.log('--received message ',request)
    return {
        type: FETCH_HISTORY,
        payload: request
    }
}