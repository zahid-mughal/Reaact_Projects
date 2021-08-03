import {useFetchDashboard} from './useFetchDashboard'

function Dashboard() {
    const [students ,setStudents] = useFetchDashboard()
    

    return (
        <div>
            {
                students.map((student,index)=>{
                    return(
                    <p>No.{index} id :{student.id} name :{student.name}</p>
                    )
                })
            }
        </div>
    )
}
export default Dashboard;