import { useState } from 'react'
function BasicState() {
    const [name, setName] = useState("Naveed")
    const [flag, setFlag] = useState(false)
    // setName("manan")
    return (
        <div>
            {
                flag ?
                    <p>your name is: {name}</p>
                    :
                    <p>Your name isjj :{name}</p>
            }
            <button onClick={()=>setFlag(!flag)}>Change</button>

        </div>

    )
}
export default BasicState