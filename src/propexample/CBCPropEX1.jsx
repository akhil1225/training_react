import { Component } from "react";

class CBCPropEx1 extends Component{
    render() {
        return(
            <div>
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                {
                    this.props.hobbies.map(hobby=>{
                        return<li>{hobby}</li>
                    })
                }
                {this.props.isMarried?<h1>Married</h1>: <hi>Not Married</hi>}
                <button onClick={this.props.sendFun}>Click</button>
            </div>
        )
    }
}

export default CBCPropEx1;