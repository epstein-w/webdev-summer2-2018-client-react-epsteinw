import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseList from './CourseList'
export default class CourseManager extends React.Component {
    constructor() {
        super();
        this.state = { course: {title: ''},
            courses: [
               ]};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    titleChanged = (event) => {
        this.setState({course: {title: event.target.value}});
        console.log(this.state.course.title);
    };

    createCourse = () => {
        console.log(this.state.course.title);
    };



    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    CourseManager
                    <div className="form-inline">
                        <input onChange={this.titleChanged} className="form-control mr-sm-2" placeholder="New Class Here" />
                        <i onClick={this.createCourse}  className="fa fa-plus-square"></i>
                    </div>
                </nav>
                <div className="container-fluid">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col"> Title </th>
                                <th scope="col"> Owned By </th>
                                <th scope="col"> Last modified by me </th>
                                <th scope="col"> <i className="fa fa-table"></i> </th>
                                <th scope="col"> <i className="fa fa-sort-alpha-asc"></i> </th>
                                <th scope="col">  </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CourseList/>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}


