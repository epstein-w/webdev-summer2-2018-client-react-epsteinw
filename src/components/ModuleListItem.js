import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.title);
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className="float-right">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}