import React ,{useState} from 'react';

function Counter(){
    let counter = 0;
    const [counter2,setCounter]=useState(0);
    
    const decrementHandler=()=>{
        counter= counter-1
        setCounter(counter2-1);
        // alert("decrementHandler called "+counter)
    }
    const incrementHandler = () =>{
        counter = counter +1
        setCounter(counter2+1)
        // alert("incrementHandler called "+ counter)
    }
    console.log("the counter using simple variable",counter)
    console.log("the counter using state variable",counter2)

    
    return(
        <div style={{padding:40}} >
            <button onClick={()=>decrementHandler(1)}>-</button>
    <span style={{padding:20}}>{counter}</span>
    <button onClick={incrementHandler}>+</button>
    <hr />
    <button onClick={()=>decrementHandler(1)}>-</button>
    <span style={{padding:20}}>{counter2}</span>
    <button onClick={incrementHandler}>+</button>
        </div>
    )
}
export default Counter;