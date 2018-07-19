import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        console.log("got here");
    }

    render() {
        return (
            <tr onClick={this.props.choseCourse(this.props.course.id)}>
                <td> {this.props.course.title} </td>
                <td> {this.props.course.creator} </td>
                <td> {this.props.course.created} </td>
                <td> </td>
                <td> </td>
                <td> <i onClick={()=>
                {this.props.deleteCourse(this.props.course.id)}} className="fa fa-trash">

                </i> </td>

            </tr>
        );
    }
}