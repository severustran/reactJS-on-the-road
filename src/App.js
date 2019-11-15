import React, {Component} from 'react';
import Todos from './components/Todos';
import './components/Todos.css';

class App extends Component {
  constructor(){
    super();
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
    ]};
    this.txtInput = React.createRef();
  }

  onItemClicked(item) {
    return (event) => {
      this.setState({
        todoLists: this.state.todoLists.map( i => i!==item ? {...i} : {...i, isCompleted: !item.isCompleted})
      });

    }
  }

  addTodo(){
    if( this.txtInput.current.value !== "" ) {
      console.log(this.txtInput.current.value);
      this.state.todoLists.push({title: this.txtInput.current.value, isCompleted: false});
      this.setState(this.state);
      this.txtInput.current.value = "";
    } else {
      alert("You forget to enter todos");
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
              <input type="text" placeholder="Enter your todo" ref={this.txtInput} ></input>
          </div>
          <button onClick={ this.addTodo.bind(this, this.addTodo) }>Add</button>
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