import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import CourseCard from './coursecard';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseEditor from './CourseEditor'
import Message from './Message'
import Stateless from './Stateless'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
    <div className="container-fluid">
        <h1> Whiteboard </h1>

        <CourseManager/>
        {/*<Stateless message="Hello Broski"/>*/}

        {/*<Message message="Hello Bro" />*/}

        {/*<ModuleList/>*/}

        {/*<CourseEditor/>*/}


        {/*<TopicPills/>*/}

        {/*<LessonTabs/>*/}



        {/*<div className="card-deck">*/}
            {/*<CourseCard/>*/}
            {/*<CourseCard/>*/}
            {/*<CourseCard/>*/}
            {/*<CourseCard/>*/}
        {/*</div>*/}

        {/*<ModuleList/>*/}

        {/*<CourseManager/>*/}
    </div>,

    document.getElementById('root')
);
