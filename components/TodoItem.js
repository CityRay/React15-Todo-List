import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onComplete() {
        this.props.actions.completeTodo(this.props.todo.id);
    }

    onDelete() {
        this.props.actions.delTodo(this.props.todo.id);
    }

    render() {
        return (
            <li className="todo__item">
                <div>{this.props.todo.text}</div>
                <button onClick={this.onComplete}>completed</button>
                <button onClick={this.onDelete}>delete</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    actions: React.PropTypes.objectOf(React.PropTypes.func),
    todo: React.PropTypes.object
};

export default TodoItem;
