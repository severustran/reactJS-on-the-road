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
  render() {
    return (
      <div className="container">
        {
          this.state.todoLists.map((item, index) => (
            <Todos key={ index } item={ item }></Todos>)
          )
        }
      </div>
    )
  }
}
export default App;