import React from 'react'
import ModuleList from './ModuleList'
import CourseService from '../services/CourseService'
import LessonTabs from '../LessonTabs'
export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.service = CourseService.instance;
        this.state = {
            course: {
                modules: [{
                    title: '',
                    courseId: '',
                    lessons: []
                }]

            }
        };
        this.createModule = this.createModule.bind(this);

    }


    componentDidMount() {
        console.log(this.props.courseId);
        this.service.findCourseById(this.props.courseId)
            .then(course => this.setState({course: course}));
    }


    createModule = (module) => {
        module.courseId = this.props.courseId;
        console.log(module);

        this.state.course.modules.push(module);
        console.log(this.state.course.modules);
        this.service.addModule(this.state.course.id, module).then(this.render());
    };

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    {/*here we would call the name of teh course we were in*/}
                    Course {this.state.course.title}
                </nav>
                <div className="bg-light">
                    <h2>Modules</h2>
                    <ModuleList modules={this.state.course.modules} createModule={this.createModule}/>
                </div>
            </div>
        );
    }
}