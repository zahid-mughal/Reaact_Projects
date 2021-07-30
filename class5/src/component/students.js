import { useState } from 'react'
import { data } from './data'
import StudentList from './studentList'

function Students() {
    const [students, setStudents] = useState(data)
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [roll, setRoll] = useState("");
    const [stuClass, setStuClass] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    // const inputHandler = (e) =>{
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    // }
    const deleteHandler = (index)=>{
        console.log("index",index)
        
        let newStudents = students.filter((student, i) =>{
            if(i !== index){
                return student;
            }
        });
        setStudents([...newStudents]);
    }


    const ctaHandler = () => {
        if (name != "" && batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch,
                roll,
                class: stuClass
            }
            console.log("student", student)
            // for new student addition
            setStudents([...students, student])
            setName("");
            setBatch("");
            setRoll("");
            setStuClass("");
            setErrorMessage("")
        } else {
            setErrorMessage("field cant be empty")
    
        }
    } 



    // console.log(students)
    return (
        <div>
            <h1>New Student</h1>
            <input type="text" value={name} name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={batch} name="batch" placeholder="Batch" onChange={(e) => setBatch(e.target.value)} />
            <input type="text" value={roll} name="roll" placeholder="RollNo" onChange={(e) => setRoll(e.target.value)} />
            <input type="text" value={stuClass} name="Class" placeholder="Class" onChange={(e) => setStuClass(e.target.value)} />
            <button onClick={ctaHandler}>Submit</button>
            <p style={{backgroundColor:"red", color:"white"}}>
                {errorMessage}
            </p>



            <hr />
            <h2>Student List</h2>
            <table border="4px">
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>

                {
                    students.map((item, index) => {
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler}/>
                    })
                }
            </table>

        </div>
    )
}
export default Students;