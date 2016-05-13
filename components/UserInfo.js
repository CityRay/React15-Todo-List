import React, { Component } from 'react'

class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.onNewId = this.onNewId.bind(this)
        this.onNewIdIfOdd = this.onNewIdIfOdd.bind(this)
        this.onNewIdAsync = this.onNewIdAsync.bind(this)
    }

    onNewId(e) {
        e.preventDefault()
        this.props.actions.createNewUserId(1, 1000)
    }

    onNewIdIfOdd(e) {
        e.preventDefault()
        this.props.actions.createNewUserIdIfOdd()
    }

    onNewIdAsync(e) {
        e.preventDefault()
        this.props.actions.createNewUserIdAsync()
    }

    render() {
        return (
            <li>
                <div>username: {this.props.user.username}</div>
                <div>memberId: {this.props.user.memberId}</div>
                <button onClick={this.onNewId}>Update with random ID</button>
                <button onClick={this.onNewIdIfOdd}>Update If Odd</button>
                <button onClick={this.onNewIdAsync}>Update async</button>
            </li>
        )
    }
}

UserInfo.propTypes = {
    actions: React.PropTypes.objectOf(React.PropTypes.func),
    user: React.PropTypes.object
}
export default UserInfo
