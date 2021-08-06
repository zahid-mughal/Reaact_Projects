
let initialState = {
    isLogin: true,
    user:{
        name:"manan",
        email:"some@gmail.com"
    }
}


function authReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_LOGIN":
            //work will be done here
            //it is object return old state and change in name in old state and new data with action 
            let newState = {
                ...state,
                isLogin: true,
                newData: action.payload
            }
            //this goes to store
            return newState

        default:
            return state;
    }

}
export default authReducer;