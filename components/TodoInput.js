import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context)

        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            inputText: ''
        }
    }

    shouldComponentUpdate() {
        return false
    }

    onSubmit(event) {
        event.preventDefault()

        // Method 1
        // if (this.state.inputText) {
        //     this.props.addTodo(this.state.inputText)

        //     this.setState({ inputText: '' })
        // } else {
        //     console.warn('inputText is null')
        // }

        // Method 2
        const input = this.refs.todoInput
        const value = input.value.trim()
        if (value) {
            this.props.addTodo(value)
            input.value = ''
        } else {
            console.warn('inputText is null')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* Mthod 1
                    <input
                        type="text"
                        className="todo__entry"
                        placeholder="Type something..."
                        value={this.state.inputText}
                        onChange={(e) => { this.setState({ inputText: e.target.value }) }}
                    />
                    */}

                    {/* Method 2 */}
                    <input
                        type="text"
                        className="todo__entry"
                        placeholder="Type something..."
                        ref="todoInput"
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
