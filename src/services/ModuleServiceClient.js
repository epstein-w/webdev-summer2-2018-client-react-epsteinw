let _singleton = Symbol();
//const COURSE_API_URL = "https://obscure-mountain-36147.herokuapp.com/api/course";
const COURSE_API_URL = "http://localhost:8080/api/module";
class ModuleServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleServiceClient(_singleton);
        return this[_singleton]
    }

}