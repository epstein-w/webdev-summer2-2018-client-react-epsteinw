import React from 'react';
// import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ModuleListItem from './ModuleListItem'

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = { module: {title: ''},
            modules: [
                {title: 'Mod 1', id: 1},
                {title: 'Mod 2', id: 2},
                {title: 'Mod 3', id: 3},
                {title: 'Mod 4', id: 4},
            ]};
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }
    titleChanged = (event) => {
        this.setState({module: {title: event.target.value}});
        console.log(this.state.module.title);
    };

    createModule = () => {
        console.log(this.state.module);
    }
    render() {
        return (
            <div>
                <input onChange={this.titleChanged} value={this.state.module.title} className="form-control" placeholder="title"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block"> <i className="fa fa-plus"></i></button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }

    renderListOfModules= () => {
        let modules = this.state.modules.map(function(module){
            return <ModuleListItem
                title={module.title} key={module.id}/>
        });
        return modules;
    }
}

