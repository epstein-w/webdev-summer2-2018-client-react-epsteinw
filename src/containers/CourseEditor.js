import React from 'react'
import ModuleList from './ModuleList'
import CourseService from '../services/CourseService'
import LessonTabs from '../LessonTabs'
export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.service = CourseService.instance
        this.state = {
            course: {
                modules: [{
                    title: '',

                }]
            }
        }

    }
    componentDidMount() {
        console.log("dfajsdfakhlj");
        this.service.findCourseById(92)
            .then(course => this.setState({course: course}));
    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    {/*here we would call the name of teh course we were in*/}
                    Course {this.state.course.title}
                </nav>
                <h2>Modules</h2>
                <ModuleList modules={this.state.course}/>
            </div>
        );
    }
}