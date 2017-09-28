import React, { Component } from 'react';

import './App.css';

class TodoList extends Component {
  render() {
	 var riga = [];
	 this.props.items.map((td,index)=> {
		 riga.push(<Single name={td.name} key={index} index={index} deleteTodo={()=>this.props.deleteTodo(index)} />)
	 });
	return (
      <ul >
	  {riga}
      </ul>
    );
  }
}
class Single extends Component {

 render() {
	
	return (
      <li>
	  {this.props.name}<input type="button" value="Delete" onClick={this.props.deleteTodo} />
      </li>
    );
  }
}

export default TodoList;
