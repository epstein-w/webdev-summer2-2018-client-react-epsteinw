import {connect} from 'react-redux'
// import {deleteWidget, createWidget,updateWidget, saveWidgets, loadAllWidgets, upMove, downMove} from '../../actions/WidgetActions'
// import {dispatcherToPropertyMapper} from '../../actions/WidgetActions'
import CourseEditor from '../CourseEditor'
import WidgetListComponent from '../../components/widgets/WidgetListComponent'
import WidgetService from '../../services/WidgetSerivce'


const stateToPropertyMapper = (state, ownProps) => {
    let check = ownProps.lesson;
    //
    // console.log("ownProps:");
    // console.log(ownProps);
    // console.log("state:");
    // console.log(state);
    state.lesson = ownProps.lesson;
    return {
        widgets: state.widgets,

        lessonId: state.lesson
    };
}


const dispatcherToPropertyMapper = dispatch => {
    var widgetService = WidgetService.instance
    return(
        {
            deleteWidget: (widgetId) => dispatch ({
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
            loadAllWidgets: () => {
                widgetService.loadAllWidgets()
                    .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets }))

            },
            upMove: (widgetId) => dispatch ({
                type: 'WIDGET_UP',
                widgetId: widgetId
            }),

            downMove: (widgetId) => dispatch ({
                type: 'WIDGET_DOWN',
                widgetId: widgetId
            }),

            lessonSelect: (lessonId) => dispatch ({
                type: 'LESSON_SELECT',
                lessonId: lessonId
            }),
            reCheck: (lessonId) => dispatch ({
                type: 'RECHECK',
                lessonId: lessonId
            })

        }
    )
}


const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);


export default WidgetListContainer;