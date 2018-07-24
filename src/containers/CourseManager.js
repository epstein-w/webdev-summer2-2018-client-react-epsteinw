import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseList from './CourseList'
import CourseCards from './CourseCardList'
import CourseService from '../services/CourseService';

export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        // this.courseService = CourseService.instance;
        this.state = { course: {title: '', courseId:''},
            courses: [
               ],
            rows: true
        };

        // this.courseService.findAllCourses()
        //     .then(courses => {
        //         this.setState({courses: courses});
        //     });
        this.viewLogic = this.viewLogic.bind(this);
        this.switchView = this.switchView.bind(this);
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

    viewLogic = () => {
        console.log(this.state.rows);
        if (this.state.rows) {
            return <CourseList selectCourse={this.props.selectCourse} switchView={this.switchView}/>
        } else {
            return <CourseCards selectCourse={this.props.selectCourse} switchView={this.switchView} />
        }
    };

    switchView = () => {
        this.setState(
            {
                course: this.state.course,
                courses: this.state.courses,
                rows: (!this.state.rows)
            })
        this.viewLogic();
    };

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
                {this.viewLogic()};

                </div>

        );
    }
}


