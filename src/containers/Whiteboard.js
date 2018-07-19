import React from 'react';

import CourseManager from './CourseManager';
import CourseCard from '../components/CourseCard';
import ModuleList from './ModuleList';
import LessonTabs from '../LessonTabs';
import TopicPills from '../TopicPills';
import CourseEditor from '../CourseEditor'
import Message from '../Message'
import Stateless from '../Stateless'
import HelloWorld from '../hello';
import App from '../App.js';
import CourseList from "./CourseList";

class WhiteBoard extends React.Component {
    render() {
        return (
            <div>
                <h1>WhiteBoard</h1>
                <CourseManager/>
                {/*<ModuleList/>*/}
                {/*<App/>*/}
            </div>
        )
    }
}
export default WhiteBoard;
