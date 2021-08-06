
let initialState = {
    name: "zahid",
    age: 24,
    class: "BSCS",
    student:[]
}


function studentReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_STUDENT":
            console.log("data in reducer from action" ,action.payload)
            //work will be done here
            //it is object return old state and change in name in old state and new data with action 
            let newState = {
                ...state,
                name: "Ali",
                newData: action.payload
            }
            //this goes to store
            return newState

        default:
            return state;
    }

}
export default studentReducer;