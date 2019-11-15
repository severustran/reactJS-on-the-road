import React, { Component } from 'react'
import './NewTodo.css';

class NewTodo extends Component {
    constructor(props){
        super(props);
        this.txt = React.createRef();
        this.state = { temp: this.props.todo };
    }
    
    showMe(){
        //this.state.temp.push({title: 'Go to gym', isCompleted: false});
        //this.setState(this.state);
        console.log(this.props);
    }

    render() {
        let { onClick, type } = this.props;
        return (
            <div className="input-group">
                <div className="input-txt">
                    <input type="text" placeholder="Enter your todo" ></input>
                </div>
                <button onClick={ onClick }>Add</button>
            </div>
        )
    }
}
//this.showMe.bind(this, this.showMe)

export default NewTodo;