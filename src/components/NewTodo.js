import React, { Component } from 'react'
import './NewTodo.css';

class NewTodo extends Component {
    render() {
        return (
            <div className="input-group">
                <div className="input-txt">
                    <input type="text" placeholder="Enter your todo" ref={ this.txt }></input>
                </div>
                <button>Add</button>
            </div>
        )
    }
}

export default NewTodo;