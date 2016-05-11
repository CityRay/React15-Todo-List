import React, { Component } from 'react'

class TodoItem extends Component {

    _handleComplete() {

        this.props.actions.completeTodo(this.props.todo.id)
    }

    _handleDelete() {

        this.props.actions.delTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this._handleComplete.bind(this)}>completed</button>
                <button onClick={this._handleDelete.bind(this)}>delete</button>
            </li>
        )
    }
}

export default TodoItem
