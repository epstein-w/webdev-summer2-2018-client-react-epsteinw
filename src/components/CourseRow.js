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
            <tr >
                <td onClick={() => {
                    this.props.selectCourse(this.props.course.id);
                }}> {this.props.course.title} </td>
                <td onClick={() => {
                    this.props.selectCourse(this.props.course.id);
                }}> {this.props.course.creator} </td>
                <td onClick={() => {
                    this.props.selectCourse(this.props.course.id);
                }}> {this.props.course.created} </td>
                <td onClick={() => {
                    this.props.selectCourse(this.props.course.id);
                }}> </td>
                <td onClick={() => {
                    this.props.selectCourse(this.props.course.id);
                }}> </td>
                <td> <i onClick={()=>
                {this.props.deleteCourse(this.props.course.id)}} className="fa fa-trash">

                </i> </td>

            </tr>
        );
    }
}