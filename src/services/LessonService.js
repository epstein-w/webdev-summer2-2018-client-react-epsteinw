let _singleton = Symbol();
const API_URL = "https://obscure-mountain-36147.herokuapp.com/api";
// const API_URL = "http://localhost:8080/api";
class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(lesson, moduleId) {
        return fetch (API_URL + "/module/" + moduleId + "/lesson", {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

    findLessons(mid) {
        return fetch(API_URL + "/module/" + mid)
            .then( function (response) {
                    return response.json().lessons;
                }
            )
    }

    checkOutThisTest() {
        return 5;
    }

}