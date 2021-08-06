import {combineReducers} from 'redux'
import studentReducer from './reducers/studentReducer'
import authReducer from './reducers/authReducer'


const rootReducer =combineReducers({
    //reducers
    authReducer,
    studentReducer
})
export default rootReducer;