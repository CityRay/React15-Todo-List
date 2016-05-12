import React, { Component } from 'react'

class TextDisplay extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.onDeleteLetter()
    }

    render() {
        return (
            <div>
                <div>
                    Displaying text from my parent: {this.props.text}
                </div>
                <button onClick={this.onClick}>Delete one Letter</button>
            </div>
        )
    }
}

export default TextDisplay
