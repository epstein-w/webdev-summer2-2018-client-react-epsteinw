import React, {Component} from 'react'
class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <h1>{this.props.message}</h1>);
    }
}

export default Message;