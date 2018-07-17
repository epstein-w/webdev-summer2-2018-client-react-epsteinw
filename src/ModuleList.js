import React from 'react';
// import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ModuleListItem from './ModuleListItem'

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = {modules: [
                {title: 'Mod 1', id: 1},
                {title: 'Mod 2', id: 2},
                {title: 'Mod 3', id: 3},
                {title: 'Mod 4', id: 4},
            ]}
    }
    render() {
        return (
            <ul className="list-group">
                {this.renderListOfModules()}
            </ul>
        );
    }
    function
    renderListOfModules() {
        let modules = this.state.modules.map(function(module){
            return <ModuleListItem
                title={module.title} key={module.id}/>
        });
        return modules;
    }
}

