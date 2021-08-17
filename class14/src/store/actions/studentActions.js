import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from "../types/types";
import {db} from '../../config/firebase'

export const fetchStudent=(setLoading)=> async(dispatch,previousState)=>{
    try{
        setLoading(true);
        let snapshot= await db.collection("students").get();
        let students = [];
        snapshot.forEach((doc)=>{
            students.push({
                docID: doc.id,
                ...doc.data()
            })
        })
        // setLoading(false)
        console.log("data from firebase into action ", students)
        dispatch({
            type: FETCH_STUDENT,
            payload:students
            
        })
    } catch(error){
        console.log("error",error.messages);
        alert(error);
    }
    finally{
        setLoading(false)
    }
}
// add student action to add sata in firebase
export const addStudent=(data,setLoading)=> async(dispatch,previousState)=>{
    try{
        setLoading(true);
         await db.collection("students").add(data);
      
        
        // setLoading(false)
        // console.log("data add into firebase in action ", student)
        dispatch({
            type: ADD_STUDENT,
            payload:data
            
        })
    } catch(error){
        console.log("error",error.messages);
        alert(error);
    }
    finally{
        setLoading(false)
    }
}

export const deleteStudent=(docID,setLoading)=> async(dispatch,previousState)=>{
    try{
        setLoading(true);
         await db.collection("students").doc(docID).delete();
      
        
        // setLoading(false)
        // console.log("data add into firebase in action ", student)
        dispatch({
            type: DELETE_STUDENT,
            payload:docID
            
        })
    } catch(error){
        console.log("error",error.messages);
        alert(error);
    }
    finally{
        setLoading(false)
    }
}

export const updateStudent=(docID,data,setLoading)=> async(dispatch,previousState)=>{
    try{
        setLoading(true);
         await db.collection("students").doc(docID).update(data);
      
        
        // setLoading(false)
        // console.log("data add into firebase in action ", student)
        dispatch({
            type: UPDATE_STUDENT,
            payload:{docID,data}
            
        })
    } catch(error){
        console.log("error",error.messages);
        alert(error);
    }
    finally{
        setLoading(false)
    }
}
