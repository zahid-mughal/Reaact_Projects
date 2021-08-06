

export const addStudent = (data) =>{
    console.log("data from component to action",data)

    return{
        type : "ADD_STUDENT",
        payload: data
    }
}