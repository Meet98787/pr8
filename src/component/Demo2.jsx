import React, { Component } from 'react'

class Demo2 extends Component {
    show = () => {
        // this.setState({
        //     name: "lg"
        // })
        console.log(this.setState)
    }
    constructor(){
        super();
        this.state = {
            name:'Nokia',
            price: 100
        };
        this.state1={
            name:'Mi',
            price: 200
        }
    }
    // state = {
    //     name: 'Nokia',
    //     price: 100
    // }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.price}</h1>
                <h1>{this.state1.name}</h1>
                <h1>{this.state1.price}</h1>
                <button onClick={this.show}> Hello</button>
            </div>
        )
    }
}

export default Demo2