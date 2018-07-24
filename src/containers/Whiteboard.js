import React from 'react';

import CourseManager from './CourseManager';

import CourseEditor from './CourseEditor'

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
        console.log(this.state.isThereSelected);
        console.log(this.state.currentSelected);
        if (this.state.isThereSelected == true) {
            console.log("course edit");
            return <CourseEditor courseId={this.state.currentSelected} />
        } else {
            console.log("course view");
            return <CourseManager selectCourse={this.selectCourse}/>
         }


    };

    render() {
        return (
            <div>

                <h1>WhiteBoard</h1>
                {this.viewLogic()}


            </div>
        )
    }
}
export default WhiteBoard;
