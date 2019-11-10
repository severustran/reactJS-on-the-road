import React, {Component} from 'react';
import Todos from './components/Todos';

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
        title: 'Go to work',
        isCompleted: false
      },
    ]};
  }
  //truthy && value => value
  //falsy && value => false
  render() {
    return (
      <div className="container">
        {
          this.state.todoLists.length > 0 && this.state.todoLists.map((item, index) => (
            <Todos key={ index } item={ item }></Todos>)
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