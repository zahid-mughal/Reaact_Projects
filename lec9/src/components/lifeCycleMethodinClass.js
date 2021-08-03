import React, { Component } from 'react'
import ChildClass from './childClass';


class MethodinClass extends Component {


    constructor(props) {
        super(props);
        console.log("parent constructor")
        this.state = { date: new Date().toISOString() }
    }
    componentWillMount() {
        console.log("parent componentWillMount")

    }
    componentDidMount() {
        console.log("parent componentDidMount");
        // this.setState({ date: new Date().toISOString() })
        this.clearSetId = setInterval(() => {
            console.log("setInterval")
            console.log("clearSetId", this.clearSetId)

            this.update_date();
        },10000);
        //    this.clearSetId2= setInterval(()=>{
        //     console.log("setInterval2")
        //     console.log("clearSetId2",this.clearSetId2)

        //  this.update_date();
        // },4000);

        //  console.log("clearSetId",this.clearSetId)
        // setTimeout(() => {
        //     console.log("setTimeout")
        //     clearInterval(this.clearSetId)
        //     this.update_date()
        // }, 3000)
    }
    componentDidUpdate() {
        console.log("parent componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("parent componentWillUnmount")
    }
    componentWillReceiveProps() {
        console.log("parent componentWillReceiveProps")
    }
    componentDidCatch(error) {
        console.log("parent componentDidCatch");
    }
    shouldComponentUpdate() {
        console.log("parent shouldComponentUpdate");
        return true;
    }
    update_date = () => {
        this.setState({ date: new Date().toISOString() })
    }

    render() {
        console.log("parent render");
        const { date } = this.state
        return (
            <div>
                parent render Method{date}
                <ChildClass date={date} />
            </div>
        )

    }
}
export default MethodinClass;