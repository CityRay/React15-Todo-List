import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tmp: ''
        }
    }

    shouldComponentUpdate(nextProps) {
        return !(this.props.todos.length === nextProps.todos.length)
    }

    // _handleDel(id, event) {
    //     event.preventDefault();
    //     console.log(id);

    //     this.props.dispatch(actions.delTodo(id))
    // }

    render() {
        return (
            <ul className="todo__list">
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
                    })
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    actions: React.PropTypes.objectOf(React.PropTypes.func),
    todos: React.PropTypes.array
}
export default TodoList
