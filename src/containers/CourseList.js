import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseRow from './CourseRow'

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: [
                {title: "A", ownedBy: "1", lastModified: ":D"},
                {title: "B", ownedBy: "2", lastModified: ":/"}
            ]
        }
    }

    render() {
        return (
           this.renderListOfCourses()


        );
    }

    function
    renderListOfCourses() {
        let courses = this.state.courses.map(function(course) {
            return <CourseRow title={course.title}  ownedBy={course.ownedBy} lastModified={course.lastModified} />
        });
        return courses;
    }
}



