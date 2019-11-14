import React, { Component } from 'react'
import './NewTodo.css';

class NewTodo extends Component {
    constructor(props){
        super(props);
        this.txt = React.createRef();
    }

    showMe(){
        alert(this.txt.current.value);
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-txt">
                    <input type="text" placeholder="Enter your todo" ref={this.txt}></input>
                </div>
                <button onClick={ this.showMe.bind(this, this.showMe) }>Add</button>
            </div>
        )
    }
}

export default NewTodo;