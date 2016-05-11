import React, { Component } from 'react'

class UserInfo extends Component {

    _handleNewId(e) {
        e.preventDefault()
        this.props.createNewUserId(1, 1000)
    }

    render() {
        return (
            <li>
                <div>username: {this.props.user.username}</div>
                <div>memberId: {this.props.user.memberId}</div>
                <button onClick={this._handleNewId.bind(this)}>Update with random ID</button>
            </li>
        )
    }
}

export default UserInfo
