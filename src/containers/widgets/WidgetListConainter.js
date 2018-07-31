import {connect} from 'react-redux'

import CourseEditor from '../CourseEditor'
import WidgetListComponent from '../../components/widgets/WidgetListComponent'


const stateToPropertyMapper = (state, ownProps) => {
    let check = ownProps.lesson;

    console.log("ownProps:");
    console.log(ownProps);
    console.log("state:");
    console.log(state);
    state.lesson = ownProps.lesson;
    return {
        widgets: state.widgets,
        lesson: state.lesson
    };
}

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget: (widgetId) => dispatch({
            type: 'DELETE_WIDGET',
            widgetId: widgetId
        }),
        createWidget: (widget) => dispatch ({
            type: 'CREATE_WIDGET',
            widget: widget
        }),
        updateWidget: (widget) => dispatch ({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
        saveWidgets: () => dispatch ({
            type: 'SAVE_WIDGETS'
        }),
        loadAllWidgets: (id) => {
            fetch('http://localhost:8080/api/widget/' + id)
                .then(response => response.json())
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
        },
        up: (widgetId) => dispatch ({
            type: 'WIDGET_UP',
            widgetId: widgetId
        }),

        down: (widgetId) => dispatch ({
            type: 'WIDGET_DOWN',
            widgetId: widgetId
        }),

        lessonSelect: (lessonId) => dispatch ({
            type: 'LESSON_SELECT',
            lessonId: lessonId
        })

    }
)

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);


export default WidgetListContainer;