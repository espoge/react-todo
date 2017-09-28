import React, { Component } from 'react';

import './App.css';

class InputBar extends Component {
   constructor(props) {
    super(props);
    this.state = {value: ''  };
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInput = this.handleInput.bind(this);
	  
  }

  handleSubmit(todo){
	 this.props.updateList(this.state.value);
	 this.setState({value: ''})

  }
    handleInput(text){
	  this.setState({value: text.target.value})	  
	  
  } 
  render() {
    return (
      <div>
			<input type="text" value={this.state.value} onChange={this.handleInput}/> <button onClick={this.handleSubmit}>Add</button>

      </div>
    );
  }
}

export default InputBar;
