import React from "react";

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>

                    <div className="card-body" onClick={() => {
                        this.props.selectCourse(this.props.course.id);
                    }}>
                    <h5 className="card-title">{this.props.course.title}</h5>
                    </div>
            </div>);

    }
}