import React from 'react';
import LessonService from '../services/LessonService'
import WidgetListContainer from './widgets/WidgetListConainter'

export default class LessonList extends React.Component {
    constructor(props) {
        super(props);
        this.lessonService = LessonService.instance;
        this.state = {
            mIndex: this.props.mIndex,
            selectedLessonIndex: 0,
            lessons: [this.props.lessons],
            lesson: {
                title: ' '
            }
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
    }

    titleChanged = (event) => {
        this.setState({mIndex: this.state.mIndex, selectedLessonIndex: this.state.selectedLessonIndex, lesson: {title: event.target.value}});
        console.log(this.state.mIndex);


    };

    selectLesson = (index) => {
        console.log(index);
        this.setState({
            mIndex: this.state.mIndex,
            selectLessonIndex: index,
            lesson: this.state.lesson
        });

    };



    render()
    {
        return (
            <div>
               <div className="row">
                    <div className="col-sm-11">
                        <input className="form-control" placeholder="Lesson Title" onChange={this.titleChanged} />
                    </div>
                    <div className="col-sm-1 ">
                        <buttonn onClick={() => this.props.createLesson(this.state.lesson, this.props.mIndex)} className="btn btn-primary">
                            <i className="fa fa-plus col-sm-12 " />
                        </buttonn>
                    </div>
                </div>
                <div>
                    <ul className="nav nav-tabs">
                        {this.props.lessons.map(
                            (lesson, i) => {
                                return ( <li  onClick={() => this.selectLesson(i)} className="list-group-item" key={i}>{lesson.title}
                                    <i className="float-right fa fa-pencil"></i>  <i onClick={() => this.props.deleteLesson(lesson.id, this.props.mIndex)}className="float-right fa fa-trash"></i>  </li>)

                            }
                        )}
                    </ul>
                </div>
                <div>
                    {console.log("lesson print: " + this.props.lessons[this.state.selectedLessonIndex].id)}
                    <WidgetListContainer lesson={this.props.lessons[this.state.selectedLessonIndex]}/>
                </div>
            </div>
        );
    }
    }
