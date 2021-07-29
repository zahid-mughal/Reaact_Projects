import Button from './button1'
function Counter(props){
    console.log("in counter from parent",props)
    return(
    <div>
        <Button data2={props.sampleData}/>
       <Button data3={props.sampleData1}/>
       </div>
    )
}
export default Counter;