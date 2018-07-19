import React from 'react';

import CourseManager from './CourseManager';
import CourseCard from '../components/CourseCard';
import ModuleList from './ModuleList';
import LessonTabs from '../LessonTabs';
import TopicPills from '../TopicPills';
import CourseEditor from './CourseEditor'
import Message from '../Message'
import Stateless from '../Stateless'
import HelloWorld from '../hello';
import App from '../App.js';
import CourseList from "./CourseList";

class WhiteBoard extends React.Component {
    constructor() {
        super();
        this.selectCourse = this.selectCourse.bind(this);
        this.viewLogic = this.viewLogic.bind(this);
        this.state = {
            isThereSelected: false,
            currentSelected: 0
        };
    }

    selectCourse = (courseId) => {
        this.setState({
            isThereSelected: true,
            currentSelected: courseId
        });
        this.viewLogic();
    };


    viewLogic = () => {
        // if (this.state.isThereSelected == true) {
        //     console.log("course edit");
        //     return <CourseEditor courseId={this.state.currentSelected} />
        // } else {
        //     console.log("course view");
        //     return <CourseManager selectCourse={this.selectCourse}/>
        // // }
    };

    render() {
        return (
            <div>
                <h1>WhiteBoard</h1>
                {<CourseEditor />}

            </div>
        )
    }
}
export default WhiteBoard;
