import React, { Component } from 'react';
import Todos from './Todos';
import TodoFilter from './TodoFilter';
import NewTodo from './NewTodo';

class TodoContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            toggle: false,
            todoLists: [
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
            }]
        }
        //   this.handleChange = this.handleChange.bind(this);
        //   this.keyPress = this.keyPress.bind(this);
        //   this.addTodo = this.addTodo.bind(this);
    }

    onItemClicked(item) {
        return (event) => {
          this.setState({
            todoLists: this.state.todoLists.map( i => i!==item ? {...i} : {...i, isCompleted: !item.isCompleted})
          });
          this.setState({
              toggle: false
          })
        }
    }

    addNewTodo = value => {
        if(value) {
            const todoLists = [...this.state.todoLists];
            todoLists.push(
                {
                    title: value,
                    isCompleted: false
                }
            )
            this.setState({
                inputValue: "",
                todoLists
            });
        } else {
            alert("Please enter your todo!");
        }
    }

    checkCompletedAll = () => {
        const todoLists = [...this.state.todoLists];
        if(!this.state.toggle) {
            this.setState({
                todoLists: todoLists.map( item =>  {
                    return (
                        {
                            ...item,
                            isCompleted: true
                        }
                    );
                })
            });
            this.setState({
                toggle: true
            })
        } else {
            this.setState({
                todoLists: todoLists.map( item =>  {
                    return (
                        {
                            ...item,
                            isCompleted: false
                            
                        }
                    );
                })
            });
            this.setState({
                toggle: false
            })
        }
    }

    render() {
        return (
            <div className="container">
                <NewTodo
                    fooAddTodo={this.addNewTodo} 
                    inputValue={this.state.inputValue}
                    checkAll={this.checkCompletedAll}/>
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
                <TodoFilter />
            </div>
        )
    }
}

export default TodoContainer;