import React from 'react';
import LessonService from '../services/LessonService'

export default class LessonList extends React.Component {
    constructor(props) {
        super(props);
        this.lessonService = LessonService.instance;
        this.state = {
            mIndex: this.props.mIndex,
            lessons: [this.props.lessons],
            lesson: {
                title: ' '
            }
        };
        this.titleChanged = this.titleChanged.bind(this);
    }

    titleChanged = (event) => {
        this.setState({mIndex: this.state.mIndex, lesson: {title: event.target.value}});
        console.log(this.state.mIndex);


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

                    {this.props.lessons.map(
                        (lesson, i) => {
                            return ( <li className="list-group-item" key={i}>{lesson.title}
                                <i className="float-right fa fa-pencil"></i>  <i onClick={() => this.props.deleteLesson(lesson.id, this.props.mIndex)}className="float-right fa fa-trash"></i>  </li>)

                        }
                    )}
                </div>
            </div>
        );
    }
    }
