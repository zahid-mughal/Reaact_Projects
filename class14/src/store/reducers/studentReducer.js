import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from "../types/types";



let initialState = {
    error: "",
    
    students: [],
}

// reducer just a function take two parameters intial state and actions
function studentReducer(state = initialState, action) {

    //action specify with switch statement
    switch (action.type) {
        case FETCH_STUDENT:
            console.log("GET_STUDENT data in reducer from action", action.payload);
            // work  / logic will be here
            return {
                ...state,
                students: action.payload
            };

        case ADD_STUDENT:
            console.log("ADD_STUDENT data in reducer from action", action.payload);
            // work  / logic will be here
            let newStudents = state.students;
            newStudents.push(action.payload)
            return {
                ...state,
                students: newStudents
            };

        case UPDATE_STUDENT:
            console.log(" UPDATE_STUDENT data in reducer from action", action.payload);
            // work  / logic will be here
            let newState = {
                ...state,
                name: "Ali",
                newData: action.payload
            }
            return newState;

        case DELETE_STUDENT:
            console.log(" DELETE_STUDENT data in reducer from action", action.payload);
            // work  / logic will be here
            let filterStudent = state.students.filter((item)=> item.docID !== action.payload)
            return {
                ...state,
                students: filterStudent
            }


        default:
            return state
    }

}

export default studentReducer;