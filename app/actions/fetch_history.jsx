import { FETCH_HISTORY } from './types.js'

export function FetchHistory(messageObj) {
    let request = messageObj
    
    //console.log(request)
    return {
        type: FETCH_HISTORY,
        payload: request
    }
}