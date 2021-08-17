import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
// import { data } from "./data";
import {fetchStudent, addStudent,deleteStudent,updateStudent} from '../../store/actions/studentActions'



export function useStudents() {
    // const [students, setStudents] = useState([])
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)
    const [loading , setLoading] = useState(false);
    const [ctaloading , setCtaLoading] = useState(false);

    const dispatch = useDispatch();


    // get data from reducer>>student(which student array)
    const students = useSelector(state => state.studentReducer.students)
    console.log("students from studentReducer",students);
    // setStudents(studentData);
    // end of store data
    
    useEffect(()=>{
        
        dispatch(fetchStudent(setLoading));

    },[])

    // api request for fetching data?

    const deleteHandler = (docID) => {
        dispatch(deleteStudent(docID,setLoading))
        
    }

    const updateHandler = (student, index) => {
        console.log("need to update stu ", student);
        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);
    }

    const ctaHandler = () => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass,
                createdAt : new Date()
            }
            console.log("student", student);
            dispatch(addStudent(student,setCtaLoading))
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }
    }


    const ctaUpdateHandler = (docID) => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);

           
                dispatch(updateStudent(docID, student, setLoading))
           
    }

    // setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    
    



return [students,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,loading,ctaloading,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass]
}
