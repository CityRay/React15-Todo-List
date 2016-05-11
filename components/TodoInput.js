import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            inputText: ''
        }
    }

    _handleSubmit(event) {
        event.preventDefault()
        if(this.state.inputText){
            this.props.addTodo(this.state.inputText)

            this.setState({inputText: ''})
        }else{
            console.warn('inputText is null');
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="Type something..."
                        value={this.state.inputText}
                        onChange={ (e) => {
                            //console.log(e.target.value);
                            this.setState({inputText: e.target.value});
                        }}
                    />
                    <input type="submit" value="SEND" />
                </form>
            </div>
        );
    }
}

export default TodoInput;
