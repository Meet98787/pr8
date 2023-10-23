import { render } from "@testing-library/react";
import { Component } from "react";

function Info(){
    return(
        <h1>hii..</h1>
    )
}

function Xyz(){
    return(
        <div>
            <Info />
        <h1>Hello</h1>
        </div>
    )
}
// class Info extends Component{
//     render(){
//         return(
//             <h1>Hello</h1>
//         )
//     }

// }

class Demo extends Component {
    render() {
        const{name,lastname}= this.props
        return (
           
            <div>
            <Xyz />
            <h1 > {name} </h1 >
            <h1 > {lastname} </h1 >
            {/* <h1>{name + lastname}</h1> */}
            </div>
        )
    }
}
export {Demo}
