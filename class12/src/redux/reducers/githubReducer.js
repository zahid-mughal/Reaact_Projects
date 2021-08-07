import {GITHUB_FOLLOWER_API,ERROR_GITHUB_FOLLOWER_API} from '../constants/types'

let initialState = {
    followers: [],
    error: ''
}


function githubReducer(state = initialState, action) {
    switch (action.type) {
        case GITHUB_FOLLOWER_API:
            console.log("data in reducer from action" ,action.payload)
            //work will be done here
            //it is object return old state and change in name in old state and new data with action 
            let newState = {
                ...state,
                followers: action.payload
            }
            //this goes to store
            return newState
            
            case ERROR_GITHUB_FOLLOWER_API:
            console.log("data in reducer from action" ,action.payload)
            //work will be done here
            //it is object return old state and change in name in old state and new data with action 
            
            //this goes to store
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }

}
export default githubReducer;