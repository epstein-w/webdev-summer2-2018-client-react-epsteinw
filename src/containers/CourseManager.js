import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseList from './CourseList'
export default class CourseManager
    extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    CourseManager
                    <i className="fa fa-plus-square"></i>
                </nav>
                <div className="container-fluid">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col"> Title </th>
                                <th scope="col"> Owned By </th>
                                <th scope="col"> Last modified by me </th>
                                <th scope="col"> <i className="fa fa-table"></i> </th>
                                <th scope="col"> <i className="fa fa-sort-alpha-asc"></i> </th>
                                <th scope="col">  </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CourseList/>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}


