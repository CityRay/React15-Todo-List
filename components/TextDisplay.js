import React, { Component } from 'react'

class TextDisplay extends Component {
    constructor(props, context) {
        super(props, context);

    }

    _handleClick() {
        //console.log('delete');
        this.props.onDeleteLetter();
    }

    render() {
        return (
            <div>
                <div>
                    Displaying text from my parent: {this.props.text}
                </div>
                <button onClick={this._handleClick.bind(this)}>Delete one Letter</button>
            </div>
        )
    }
}

export default TextDisplay;
