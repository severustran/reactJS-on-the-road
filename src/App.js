import React, {Component} from 'react';
import Todos from './components/Todos';
import './components/Todos.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todoLists: [
      { 
        title: 'Go jogging',
        isCompleted: true
      },
      { 
        title: 'Reading book',
        isCompleted: false
      },
      { 
        title: 'Have breakfast',
        isCompleted: true
      },
      { 
        title: 'Hello Orla!',
        isCompleted: false
      },
    ], input: ""};
    this.txtInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      this.setState({
        todoLists: this.state.todoLists.map( i => i!==item ? {...i} : {...i, isCompleted: !item.isCompleted})
      });

    }
  }

  //First way: Use ref to add new todo
  // addTodo(e){
  //   if( this.txtInput.current.value !== "" ) {
  //     console.log(this.txtInput.current.value);
  //     this.state.todoLists.push({title: this.txtInput.current.value, isCompleted: false});
  //     this.setState(this.state);
  //     this.txtInput.current.value = "";
  //   } else {
  //     alert("You forget to enter todos");
  //   }
  // }

  //Second way: Use React design concept
  addTodo(event){
    if( this.state.input !== "" ) {
      console.log(this.state.input);
      this.setState({ 
        todoLists: [ ...this.state.todoLists, {title: this.state.input, isCompleted: false} ]
      });
      this.setState({ input: "" });
    } else {
      alert("You forget to enter todos");
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
    // console.log(this.state.input);
  }

  keyPress(event) {
    if(event.key === "Enter") {
      this.addTodo();
    }
  }

   //truthy && value => value
  //falsy && value => false
  render() {
    // console.log(this.state.todoLists);
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-txt">
              <input type="text" 
                placeholder="Enter your todo" 
                ref={ this.txtInput }
                value={ this.state.input }
                onChange= { this.handleChange } 
                onKeyPress= { this.keyPress }>              
                </input>
          </div>
          <button onClick={ this.addTodo }>Add</button>
        </div>
        {
          this.state.todoLists.length > 0 && this.state.todoLists.map((item, index) => (
            <Todos 
              key={ index } 
              item={ item } 
              onClick={ this.onItemClicked(item) }></Todos>
            )
          )
        }
        {
          this.state.todoLists.length === 0 && 'Nothing show up here'
        }
      </div>
    )
  }
}
export default App;