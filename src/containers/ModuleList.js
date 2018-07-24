import React from 'react';
// import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleServiceClient from '../services/ModuleServiceClient';
import ModuleListItem from '../components/ModuleListItem';
import LessonList from './LessonList';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {
                title: "",
                courseId: '',
                lessons: [{
                    title: ''
                }],
            },
            selectedModuleIndex: 0
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.selectedModule = this.selectedModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        // this.createModule = this.createModule.bind(this);
    }

    titleChanged = (event) => {
        this.setState({module: {title: event.target.value, courseId: this.state.module.courseId}});
        console.log(this.state.selectedModuleIndex);
        console.log(this.props.modules);
        console.log(this.props.modules.lessons)

    };

    // createModule = () => {
    //     this.ModuleServiceClient
    //         .createModule(this.state.module)
    //         .then(this.props.modules.push(this.state.module));
    // };

    selectedModule = (index) => {
        console.log(index);
        this.setState({
            selectedModuleIndex: index
        });
    };

    deleteModule = (index) => {
        console.log(index);
    };



    render() {
        return (
            <div>

                <div className="bg-light">
                <div className="row">
                    <div className="col-sm-4 bg-secondary" >
                        <ul className="list-group list-group-flush">

                            {this.props.modules.map(
                                (module, i) => {
                                    return ( <li className="list-group-item" onClick={() => this.selectModule(i)} key={i}>{module.title}
                                    <i className="fa fa-pencil"></i>  <i className="fa fa-trash"></i>  </li>)

                                }
                            )}

                            <li className="list-group-item">
                                <input className="form-control" onChange={this.titleChanged} placeholder="Module" />
                                <i onClick ={
                                    () => {this.props.createModule(this.state.module)}} className="fa fa-plus"></i>
                            </li>

                        </ul>

                    </div>
                    <div className="col-sm-8">
                        <LessonList lesson={this.props.modules[this.state.selectedModuleIndex]}/>
                    </div>
                </div>
                </div>
            </div>

        );
    }



}

