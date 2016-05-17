import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'


class App extends Component {
    constructor(props) {
        super(props)
        console.log('App Component')

        this.state = {
            tmp: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <UserInfo actions={this.props.actions} user={this.props.user} />
                <br />
                <TodoInput addTodo={this.props.actions.addTodo} />
                <TodoList actions={this.props.actions} todos={this.props.todos} />
            </div>
        )
    }
}

App.propTypes = {
    actions: React.PropTypes.object,
    todos: React.PropTypes.array,
    user: React.PropTypes.object
}

// bind state 到 props
function mapStateToProps(state) {
    return state
}

// bind dispatch & actions 到 props，連接之後不用再寫 this.props.dispatch，直接傳 actions to child
// Child 不用再 import actions
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
