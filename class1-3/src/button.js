function Button(props){
    console.log("get from parent",props)
    return(
        <div>
            <button style={{color:props.color}}>{props.title}</button>

        </div>
    )
}
export default Button;