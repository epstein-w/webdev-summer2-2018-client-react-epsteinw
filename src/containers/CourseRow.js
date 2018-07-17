import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td> {this.props.title} </td>
                <td> {this.props.ownedBy} </td>
                <td> {this.props.lastModified} </td>
                <td> </td>
                <td> </td>
                <td> <i className="fa fa-xing-square"></i> </td>

            </tr>
        );
    }
}