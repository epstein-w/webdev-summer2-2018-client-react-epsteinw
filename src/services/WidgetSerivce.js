let _singleton = Symbol();
let curSel = 112;
const API_URL = "https://obscure-mountain-36147.herokuapp.com/api";
// const API_URL = "http://localhost:8080/api";
class WidgetSerivce {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new WidgetSerivce(_singleton);
        return this[_singleton]
    }


    changeSel(id) {
       curSel = id;
       return this.loadAllWidgets();

    }

    getCurSel() {
        return curSel;
    }



    loadAllWidgets () {
        return fetch(API_URL + '/lesson/' + curSel + '/widget' )
            .then((response) => {return (response.json())})
    }

    saveWidgets(widgets) {
        fetch(API_URL + '/lesson/' + curSel + '/widget/saveAll', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(widgets)
        });
    }

    getWidgetsFromLesson(lessonId) {
        console.log("fetch from: " + lessonId);
        return fetch(API_URL + '/lesson/' + lessonId + '/widget' )
            .then(function (response) {
                let t = response.json();
                console.log('t' + t);
                return t;
            });
    }
}

export default WidgetSerivce;