import React from 'react';
import CourseRow from '../components/CourseRow'
import CourseCard from '../components/CourseCard'
import CourseService from "../services/CourseService";

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.ownerChanged = this.ownerChanged.bind(this);
        this.choseCourse = this.choseCourse.bind(this);
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

    // renderCourseRows() {
    //     let c = null;
    //
    //     console.log("render course rows");
    //     console.log(this.state);
    //     if(this.state) {
    //         c = this.state.courses.map(
    //             function (course) {
    //                 return <CourseRow key={course.id} course={course}
    //                                   deleteCourse={this.deleteCourse} />
    //             }
    //         )
    //     }
    //     return (
    //         c
    //     )
    // }
    //
    // renderCards() {
    //     let c = null;
    //
    //     console.log("render course rows");
    //     console.log(this.state);
    //     if(this.state) {
    //         c = this.state.courses.map(
    //             function (course) {
    //                 return <CourseCard key={course.id}
    //                                   course={course}/>
    //             }
    //         )
    //     }
    //     return (
    //         c
    //     )
    // }

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

    choseCourse = (id) => {
        this.props.courseSelectionHandler(id);
    };

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"> Title </th>
                        <th scope="col"> Owned By </th>
                        <th scope="col"> Created </th>
                        <th scope="col"> <i className="fa fa-table"></i> </th>
                        <th scope="col"> <i className="fa fa-sort-alpha-asc"></i> </th>
                        <th scope="col">  </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th> <input className="form-control" onChange={this.titleChanged} placeholder="Title" /> </th>
                        <th> <input className="form-control" onChange={this.ownerChanged} placeholder="Owner" /> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> <i onClick={this.createCourse} className="fa fa-plus"></i></th>
                    </tr>
                    {this.state.courses.map((course, index) =>
                    <CourseRow choseCourse={this.choseCourse} key={index} deleteCourse={this.deleteCourse} course={course}/>)}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default CourseList;