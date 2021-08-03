import React, { Component } from 'react'

class MethodinClass extends Component {

    constructor(props){
        super(props);
        console.log("constructor")
    }
    componentWillMount(){
        console.log("componentWillMount")
    }

    render() {
        console.log("render")
        return (
            <div>text in Component</div>
        )

    }
}
export default MethodinClass;