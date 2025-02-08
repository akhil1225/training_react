import React, { Component } from 'react'
import "./myStyles.css"

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "I am attending a React Class",
            clicked: false
      }
    }

    changeMessage = () =>{
        this.setState((prevState) =>({
            message: "Thanks for attending the react class",
            clicked: !prevState.clicked,
        }))
    }

    render() {
        let applystyle = this.state.clicked? "heading2" : "heading1";
        return (
            <div className='app'>
                <h1 className={`heading ${applystyle}`}>{this.state.message}</h1>
                <button className="btn" onClick={this.changeMessage}>Click Me</button>
            </div>
        )
    }
}
