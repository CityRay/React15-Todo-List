import React, { Component } from 'react'

class UserInfo extends Component {

    _handleNewId(e) {
        e.preventDefault()
        this.props.actions.createNewUserId(1, 1000)
    }

    _handleNewIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }

    _handleNewIdAsync() {
        this.props.actions.createNewUserIdAsync()
    }

    render() {
        return (
            <li>
                <div>username: {this.props.user.username}</div>
                <div>memberId: {this.props.user.memberId}</div>
                <button onClick={this._handleNewId.bind(this)}>Update with random ID</button>
                <button onClick={this._handleNewIdIfOdd.bind(this)}>Update If Odd</button>
                <button onClick={this._handleNewIdAsync.bind(this)}>Update async</button>
            </li>
        )
    }
}

export default UserInfo
