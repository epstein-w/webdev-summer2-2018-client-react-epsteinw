import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from "../services/CourseService";
import CourseCard from "../components/CourseCard"

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.ownerChanged = this.ownerChanged.bind(this);

        this.state = {
            course: {},
            courses: []
        };
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            })
    }


    titleChanged(event) {
        var date = new Date();
        console.log(event.target.value);
        this.setState({
            course: { title: event.target.value,
                created: date.toISOString(),
                creator: this.state.course.creator}
        });
    }

    ownerChanged(event) {
        var date = new Date();
        this.setState({
            course: { title: this.state.course.title,
                created: date.toISOString(),
                creator: event.target.value}
        });
    }

    createCourse() {
        var date = new Date();
        this.setState({
            course: { title: this.state.course.title,
                created: date.toISOString(),
                creator: this.state.course.creator}
        });
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
        console.log(this.state.course);
    }

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => {this.findAllCourses(); })
        console.log(courseId);
    };



    render() {
        return (
            <div>
                <h2>Course Cards <i onClick={()=> {
                    this.props.switchView(); }} className="fa fa-table"></i> </h2>

                <div className="card-deck">
                    {this.state.courses.map((course, index) =>
                        <CourseCard selectCourse={this.props.selectCourse} key={index} deleteCourse={this.deleteCourse} course={course}/>)}
                </div>




            </div>
        );
    }
}