import { useState } from 'react'
function FormHandling() {
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [roll, setRoll] = useState("");
    const [stClass, setStClass] = useState("");

    const submitHandler =()=>{
        let student={
            name:name,
            batch:batch,
            roll:roll,
            class:stClass
        }
        console.log("data submitHnler object",student)
    }





    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
            <p>the name is :{name}</p>
            <input onChange={(e) => setBatch(e.target.value)} type="text" placeholder="Batch" />
            <p>the Batch is :{batch}</p>
            <input onChange={(e) => setRoll(e.target.value)} type="text" placeholder="Roll No" />
            <p>the name is :{roll}</p>

            <input onChange={(e) => setStClass(e.target.value)} type="text" placeholder="Class" />
            <p>the name is :{stClass}</p>
            <button type="submit" onClick={submitHandler}>Submit</button>

        </div>
    )
}
export default FormHandling;