import React, { Component } from 'react'

class ChildClass extends Component {


    constructor(props) {
        super(props);
        console.log("child constructor")
        
    }
    componentWillMount() {
        console.log("child componentWillMount")
       
    }
    componentDidMount() {
        console.log("child componentDidMount");
       
       
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }
    componentWillReceiveProps(props){
        console.log("child  componentWillReceiveProps",props)
    }
    componentDidCatch(error){
        console.log("child  componentDidCatch");
    }
    shouldComponentUpdate(){
        console.log("child shouldComponentUpdate");
        return true;
    }
    update_date = ()=>{
        this.setState({date: new Date().toISOString()})
    }

    render() {
        console.log("child render");
        const { date } = this.props
        return (
            <div>Child render Method{date}</div>
        )

    }
}
export default ChildClass;