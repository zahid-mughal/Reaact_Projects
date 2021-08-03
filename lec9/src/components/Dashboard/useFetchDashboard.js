import { useState } from 'react'
export function useFetchDashboard() {
    const [students, setStudents] = useState([{
        name: "zahid",
        id: 1000
    },
    {
        name: "zahid1",
        id: 10001
    },
    {
        name: "zahid2",
        id: 10002
    },
    {
        name: "zahid3",
        id: 10003
    }
    ])

    return [students ,setStudents]
    
}
