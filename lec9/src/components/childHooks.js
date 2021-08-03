import { useState, useEffect } from 'react'

function ChildHooks({date}) {

    
    
    
    
    useEffect(() => {
        console.log("chilld useEffect with empty array >> componentDidMount")
      
    }, []);
    
    useEffect(() => {
        return()=> console("chilld componentWillUnMounut")
    }, []);

    useEffect(() => {
        console.log("chilld componentWillRecieveProps");
    }, [date]);

    useEffect(() => {
        console.log("chilld useEffect with null 2nd param >> componentDidUpdate")
    });
    



    console.log("chilld render in Hooks")
    return (

        <div>chilld Date in hooks {date}

        </div>
    )
}
export default ChildHooks;