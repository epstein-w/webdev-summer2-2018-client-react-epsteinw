let _singleton = Symbol();
// const COURSE_API_URL = "https://obscure-mountain-36147.herokuapp.com/api/course";
const COURSE_API_URL = "http://localhost:8080/api/course";
class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    findCourseById(id) {
        return fetch (COURSE_API_URL + "/" + id)
            .then(function response(response) {
                return response.json();
            });
    }

    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }

    deleteCourse(id) {
        return fetch(COURSE_API_URL + "/" + id,  {
            method: 'DELETE',

        })
     }

    addModule(id, module) {
        return fetch(COURSE_API_URL + '/' + id + '/module', {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'

            }
        }).then (function (response) {
            return response.json();
        });
    }

    deleteModule(cid, mid) {
        return fetch(COURSE_API_URL + "/" + cid + "/module/" + mid,  {
            method: 'DELETE'
        });
    }

    createLesson(lesson, moduleId) {
        return fetch (COURSE_API_URL + "/module/" + moduleId + "/lesson", {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }
    deleteLesson(lid, mid) {
        return fetch (COURSE_API_URL + "/module/" + mid + "/lesson/" + lid, {
            method: 'DELETE'
        } )
    }


}
export default CourseService;
