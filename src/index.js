import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './CourseManager';
import CourseCard from './coursecard';
import ModuleList from './ModuleList'
import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <div className="container-fluid">
        <h1> Whiteboard </h1>
        <div className="card-deck">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>

        <ModuleList/>

        <CourseManager/>
    </div>,

    document.getElementById('root')
);
