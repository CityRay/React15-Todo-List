import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    // _handleDel(id, event) {
    //     event.preventDefault();
    //     console.log(id);

    //     this.props.dispatch(actions.delTodo(id))
    // }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
                    })
                }
            </ul>
        )
    }
}

export default TodoList
