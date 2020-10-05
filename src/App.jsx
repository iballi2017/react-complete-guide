import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    name: "Ibrahim"
  };
  handleChange = ()=>{
    this.setState({
      name: "Abayomi"
    })
  }

  handleBindChange = (event)=>{
    this.setState({
name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <p>
        {this.state.name}</p>
        <button onClick={this.handleChange}>Change Text</button>

        <input type="text" onChange={this.handleBindChange} value ={this.state.name} />
        <Person/>
      </div>
    );
  }
}

export default App;
