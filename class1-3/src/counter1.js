function Counter(){
    let counter = 0;
    
    const decrementHandler=()=>{
        counter= counter-1
        alert("decrementHandler called "+counter)
    }
    const incrementHandler = () =>{
        counter = counter +1
        alert("incrementHandler called "+ counter)
    }
    
    
    return(
        <div style={{padding:40}} >
            <button onClick={decrementHandler}>-</button>
    <span style={{padding:20}}>{counter}</span>
    <button onClick={incrementHandler}>+</button>
        </div>
    )
}
export default Counter;