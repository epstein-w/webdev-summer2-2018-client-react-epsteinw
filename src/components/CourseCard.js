import React from 'react'
// import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        console.log("got here");
    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        );
    }
}