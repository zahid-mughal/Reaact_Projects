import { useState, useEffect } from 'react'
import ChildHook from "./childHooks"

function MethodinHooks() {
    const [date, setDate] = useState(new Date().toISOString());

    
    
    
    
    useEffect(() => {
        console.log("parent useEffect with empty array >> componentDidMount")
        setDate(new Date().toISOString())
      
    }, []);
    
    useEffect(() => {
        return()=> console("parent componentWillUnMounut")
    }, []);

    // useEffect(() => {
    //     console("componentWillRecieveProps")
    // }, [date]);

    useEffect(() => {
        console.log("parent useEffect with null 2nd param >> componentDidUpdate")
    });
    



    console.log("parent render in Hooks")
    return (

        <div>parent Date in hooks {date}
            <ChildHook date={date}/>
        </div>
    )
}
export default MethodinHooks;