import {combineReducers} from 'redux'
import studentReducer from './reducers/studentReducer'
import authReducer from './reducers/authReducer'
import githubReducer from './reducers/githubReducer'


const rootReducer =combineReducers({
    //reducers
    authReducer,
    studentReducer,
    githubReducer
})
export default rootReducer;