import React from 'react';

export default class LessonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: {
                title: ' '
            }
        };
        this.titleChanged = this.titleChanged.bind(this);
    }

    titleChanged = (event) => {
        this.setState({lesson: {title: event.target.value}});
        console.log(this.props.lesson);

    };

    render()
    {
        return (
            <div>
                <h3>{this.props.lesson.title} </h3>
                <div className="row">
                    <div className="col-sm-11">
                        <input className="form-control" placeholder="Lesson Title" onChange={this.titleChanged} />
                    </div>
                    <div className="col-sm-1 ">
                        <buttonn className="btn btn-primary">
                            <i className="fa fa-plus col-sm-12 " />
                        </buttonn>
                    </div>
                </div>
            </div>
        );
    }
    }
