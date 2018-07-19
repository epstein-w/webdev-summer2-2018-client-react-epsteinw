import React from 'react';
// import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleServiceClient from '../services/ModuleServiceClient'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.ModuleServiceClient = ModuleServiceClient.instance;
        this.state = {
            module: {title: ''},
            modules: [
                {title: 'Mod 1', id: 1, lessons: 'a'},
                {title: 'Mod 2', id: 2, lessons: 'b'},
                {title: 'Mod 3', id: 3, lessons: 'c'},
                {title: 'Mod 4', id: 4, lessons: 'd'},
            ]
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

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    {/*here we would call the name of teh course we were in*/}
                    Course XYZ
                </nav>
                <div className="bg-light">
                <div className="col-sm-4 bg-secondary" >
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                    <div className="row">
                        <div className="col-sm-10">
                            <input onChange={this.titleChanged} value={this.state.module.title} className="form-control" placeholder="title"/>
                        </div>
                        <div className="col-sm-2">
                        <button onClick={this.createModule} className="btn btn-primary btn-block"> <i className="fa fa-plus"></i></button>
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

    renderListOfModules= () => {
        let m = null;
        console.log("render module list");
        console.log(this.state);
        if(this.state) {
            m = this.state.modules.map(function (module) {
                return <ModuleListItem
                    title={module.title} key={module.id}/>
            });
            return m;
        }
    }

    // renderListOfLessons = () => {
    //     return <LessonList  key={this.state.modules[0].id} lessons={this.state.modules[0].lessons}>;
    // }
}

