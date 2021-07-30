import {useState} from 'react'
import {data} from './data'

function Students(){
    const [students, setStudents] = useState(data)
    console.log(students)
    return(
            <div>

            </div>
    )
}
export default Students;