import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.onComplete = this.onComplete.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onComplete() {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    onDelete() {
        this.props.actions.delTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this.onComplete}>completed</button>
                <button onClick={this.onDelete}>delete</button>
            </li>
        )
    }
}

export default TodoItem
