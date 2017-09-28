import React, { Component } from 'react';
import TodoList from './TodoList'
import InputBar from './InputBar'
import './App.css';

class App extends Component {
    
 constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
	this.deleteTodo = this.deleteTodo.bind(this);
	this.state = {
		todos:[
			{name: 'spesa'},
			{name: 'studio'},
			{name: 'telefonare'},
			{name: 'fare doccia'}
		],
		
	}
  }

updateList(name){
	  console.log(this.state.todos)
	  this.setState({
      name: this.state.todos
  });
	this.state.todos.push({name});
	 
}
	
	deleteTodo(index){
	 this.state.todos.splice(index, 1);
	 this.setState({todos: this.state.todos});
	 console.log(index)
}
   render() {
         
	return (
      <div className="App">
		<InputBar updateList={this.updateList}/>
		<TodoList items={this.state.todos} deleteTodo={this.deleteTodo}/>
   </div>
    );
  }
}

export default App;
