import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseList from './CourseList'
import CourseService from '../services/CourseService';

export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        // this.courseService = CourseService.instance;
        this.state = { course: {title: '', courseId:''},
            courses: [
               ]};

        // this.courseService.findAllCourses()
        //     .then(courses => {
        //         this.setState({courses: courses});
        //     });

    }

    // titleChanged = (event) => {
    //     this.setState({course: {title: event.target.value}});
    //     console.log(this.state.course.title);
    // };
    //
    // createCourse = () => {
    //     console.log(this.state.course.title);
    //     this.courseService.createCourse(this.state.course)
    //         .then(this.state.courses.push());
    // };



    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    CourseManager
                    {/*<div className="form-inline">*/}
                        {/*<input onChange={this.titleChanged} className="form-control mr-sm-2" placeholder="New Class Here" />*/}
                        {/*<i onClick={this.createCourse}  className="fa fa-plus-square"></i>*/}
                    {/*</div>*/}
                </nav>
                <CourseList selectCourse={this.props.selectCourse}/>

                </div>

        );
    }
}


