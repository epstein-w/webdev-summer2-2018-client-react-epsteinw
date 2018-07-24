import React from 'react'
import ModuleList from './ModuleList'
import CourseService from '../services/CourseService'
export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.service = CourseService.instance;
        this.state = {
            course: {
                modules: [{
                    title: '',
                    courseId: '',
                    lessons: [{}]
                }]

            }
        };
        this.createModule = this.createModule.bind(this);
        this.renderModuleList = this.renderModuleList.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);

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
        this.service.addModule(this.state.course.id, module);
    };

    deleteModule = (mid) =>{
        console.log(mid);
        console.log(this.state.course.modules[mid]);
        this.service.deleteModule(this.state.course.id, this.state.course.modules[mid].id)
            .then(this.renderModuleList);
    };

    renderModuleList = () => {
        return (<ModuleList modules={this.state.course.modules} createModule={this.createModule} deleteModule={this.deleteModule} createLesson={this.createLesson} deleteLesson={this.deleteLesson} />)
    };

    createLesson = (lesson, mindex) => {
        console.log(lesson);
        console.log(mindex);
        console.log(this.state.course.modules[mindex].id)
        this.service.createLesson(lesson, this.state.course.modules[mindex].id)
            .then(this.renderModuleList());

    };

    deleteLesson = (lid, mid) => {
        console.log(lid);
        console.log(mid);
        console.log(this.state.course.modules[mid].id);
        this.service.deleteLesson(lid, this.state.course.modules[mid].id)
            .then(this.renderModuleList)
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
                    {this.renderModuleList()}
                </div>
            </div>
        );
    }
}