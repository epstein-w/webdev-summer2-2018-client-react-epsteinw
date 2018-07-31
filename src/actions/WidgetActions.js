//
// export const deleteWidget = (widgetId, dispatch) => {
//     dispatch({
//         type: 'DELETE_WIDGET',
//         widgetId: widgetId
//     })
// }
//
// export const createWidget = (widget, dispatch) => dispatch ({
//     type: 'CREATE_WIDGET',
//     widget: widget
// })
//
// export const updateWidget = (widget, dispatch) => dispatch ({
//     type: 'UPDATE_WIDGET',
//     widget: widget
// })
//
// export const saveWidgets = (dispatch) => dispatch ({
//     type: 'SAVE_WIDGETS'
// })
//
//
// export const loadAllWidgets = ( dispatch, id) => {
//     fetch('http://localhost:8080/api/widget/' + id)
//         .then(response => response.json())
//         .then(widgets => dispatch({
//             type: 'FIND_ALL_WIDGETS',
//             widgets: widgets
//         }))
// }
//
// export const upMove = (widgetId, dispatch) => dispatch ({
//     type: 'WIDGET_UP',
//     widgetId: widgetId
// })
//
// export const downMove = (widgetId, dispatch ) => dispatch ({
//     type: 'WIDGET_DOWN',
//     widgetId: widgetId
// })
//
// export const lessonSelect = (lessonId, dispatch) => dispatch ({
//     type: 'LESSON_SELECT',
//     lessonId: lessonId
// })

export const dispatcherToPropertyMapper = dispatch => (
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
        loadAllWidgets: (id) => {
            fetch('http://localhost:8080/api/widget/')
                .then(response => response.json())
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
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
        })

    }
)