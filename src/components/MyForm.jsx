import React, { Component } from 'react';
import "./myStyles.css"

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Akhilendra',
      skillValue: 'Angular', // Default selected value
    };
  }

  changeTextValue = (event) => {
    this.setState({ textValue: event.target.value });
  };

  changeSkillValue = (event) => {
    this.setState({ skillValue: event.target.value });
  };

  handleSubmit =(event) =>{
    event.preventDefault();
    alert(`College Name: ${this.state.textValue}\n Skill: ${this.state.skillValue}`)
  }

  render() {
    return (
      <div className='app'>
        <form onSubmit={this.handleSubmit}>
          <label>College Name</label>
          <input 
            type="text" 
            value={this.state.textValue} 
            onChange={this.changeTextValue} 
          />
          <br />

          <label>Skill</label>
          <select 
            value={this.state.skillValue} 
            onChange={this.changeSkillValue}
          >
            <option>React</option>
            <option>Angular</option>
            <option>Springboot</option>
          </select>
          <br></br>
          <button className="myButton" type='Submit'>Submit here</button>
        </form>
      </div>
    );
  }
}
