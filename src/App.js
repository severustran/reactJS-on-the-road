import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React';
    var myInfo = {
      name: "Severus",
      job: "Librarian"
    }
    return (
      <div className="App">
        <h2>My name is {myInfo.name}</h2>
        <h2>My current job is {myInfo.job}</h2>
      </div>
    )
  }
}
class Clock extends React.Component {
  render() {
      return (
          <h1>It is {new Date().toLocaleTimeString()}</h1>
      )
  }
}
export default App;