import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context)

        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            inputText: ''
        }
    }

    onSubmit(event) {
        event.preventDefault()
        if (this.state.inputText) {
            this.props.addTodo(this.state.inputText)

            this.setState({ inputText: '' })
        } else {
            console.warn('inputText is null')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="todo__entry"
                        placeholder="Type something..."
                        value={this.state.inputText}
                        onChange={(e) => { this.setState({ inputText: e.target.value }) }}
                    />
                    <input type="submit" value="SEND" />
                </form>
            </div>
        )
    }
}

TodoInput.propTypes = {
    addTodo: React.PropTypes.func
}
export default TodoInput
