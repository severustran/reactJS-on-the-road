import React, { Component } from 'react'
import './Todos.css';

class Todos extends Component {
    render() {
        let item = this.props.item;
        
        
        //First way
        // let className = 'TodoItem';
        // if(item.isCompleted) {
        //     className += ' TodoItem-complete';
        // }

        //Second way - using npm classname
        let classNames = require('classnames');
        let className = classNames({
            'TodoItem': true, 'TodoItem-complete': item.isCompleted
        });
        return (
            <div className={ className }>
                <p> { item.title } </p>
            </div>
        )
    }
}

export default Todos;