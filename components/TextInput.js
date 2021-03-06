import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)

        this.onDeleteLetter = this.onDeleteLetter.bind(this)
        this.state = {
            inputText: ''
        }
    }
    onDeleteLetter() {
        // take current this.state.inputText
        // delete letter
        // update state
        this.setState({
            inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="type something..."
                    value={this.state.inputText}
                    onChange={(e) => { this.setState({ inputText: e.target.value }) }}
                />
                <TextDisplay text={this.state.inputText} onDeleteLetter={this.onDeleteLetter} />
            </div>
        )
    }
}

export default TextInput
