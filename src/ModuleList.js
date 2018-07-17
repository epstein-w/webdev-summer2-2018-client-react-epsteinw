import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ModuleListItem from './ModuleListItem'

export default class ModuleList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <ModuleListItem/>
                <ModuleListItem/>
            </ul>
        );
    }
}