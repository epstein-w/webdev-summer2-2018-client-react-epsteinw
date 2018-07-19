import React from 'react';
// import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleServiceClient from '../services/ModuleServiceClient'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModuleIndex: 0
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    titleChanged = (event) => {
        this.setState({module: {title: event.target.value}});
        console.log(this.state.module.title);
    };

    createModule = () => {
        this.ModuleServiceClient
            .createModule(this.state.module)
            .then(() => {
                this.findAllModules();});
    };

    selectedModule = (index) => {
        console.log(index);
        this.setState({
            selectedModuleIndex: index
        });
    };

    render() {
        return (
            <div>

                <div className="bg-light">
                <div className="col-sm-4 bg-secondary" >
                    <ul className="list-group">
                        {this.props.course.modules.map(
                            (module, index) => {
                                return (<ModuleListItem key={index} deleteModule={this.deleteModule} module={module}/>)})}
                    </ul>
                    <div className="row">
                        <div className="col-sm-10">
                            <input onChange={this.titleChanged} value={this.state.module.title} className="form-control" placeholder="title"/>
                        </div>
                        <div className="col-sm-2">
                        <button onClick={this.props.createModule(this.state)} className="btn btn-primary btn-block"> <i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">

                    {/*{this.renderListOfLessons}*/}
                </div>
                </div>
            </div>

        );
    }


    // renderListOfLessons = () => {
    //     return <LessonList  key={this.state.modules[0].id} lessons={this.state.modules[0].lessons}>;
    // }
}

