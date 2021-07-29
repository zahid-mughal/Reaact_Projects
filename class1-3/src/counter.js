import Button from './button1'
function Counter(props){
    console.log("in counter from parent",props)
    return(
    <div>
        <Button data2={props.data}/>
       <Button data3={props.data1}/>
       </div>
    )
}
export default Counter;