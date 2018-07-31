
let initialState = {
        widgets: [
            // {title: 'Youtube 1', id: 8, widgetType: 'YOUTUBE', src: 'qMXNC5KeD0I'},
            // {title: 'Header 1', id: 9, widgetType: 'HEADING', size: 1},
            // {title: 'List 1', id: 10, widgetType: 'LIST', ordered: true, listItems: 'item1\nitem2\nitem3'},
            // {title: 'Widget 1', id: 11, widgetType: 'WT1'},
            // {title: 'Widget 2', id: 12, widgetType: 'WT2'},
            // {title: 'Widget 3', id: 13, widgetType: 'WT3'},
            // {title: 'Widget 4', id: 14, widgetType: 'WT1'}
            ]
    };

const WidgetReducer = (state = initialState, action) => {
    let fromIndex;
    let toIndex;
    let removedWidget;
    let newWidgetList;

    switch (action.type) {
        case 'SAVE_WIDGETS':
            fetch('http://localhost:8080/api/widget', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            });
            return state;
        case 'DELETE_WIDGET':
            return  {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':

            for (var i = 0; i < state.widgets.length; i++) {
                state.widgets[i].position++;
            }


            return {
               widgets: [
                  action.widget,
                   ...state.widgets
               ]
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return widget;
                    }
                })

            }
        case 'FIND_ALL_WIDGETS':
            initialState = action.widgets;

            action.widgets.sort((a, b) => {return a.position - b.position });

            return {widgets: action.widgets};
        case 'WIDGET_UP':
            fromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);

            if (fromIndex < 1) {
                toIndex = fromIndex;
            } else {
                toIndex = fromIndex - 1;
                removedWidget = state.widgets.splice(fromIndex, 1);
                console.log(removedWidget);
                state.widgets.splice(toIndex, 0, removedWidget.pop());
                console.log(state.widgets);
                for (var i = 0; i < state.widgets.length; i++) {
                    state.widgets[i].position = i;

                }
                console.log(state.widgets);
            }
            newWidgetList = Object.assign(state.widgets);
            return {
                widgets: newWidgetList
            };

        case 'WIDGET_DOWN':
            fromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);

            if (fromIndex < 1) {
                toIndex = fromIndex;
            } else {
                toIndex = fromIndex + 1;
                removedWidget = state.widgets.splice(fromIndex, 1);
                console.log(removedWidget);
                state.widgets.splice(toIndex, 0, removedWidget.pop());
                console.log(state.widgets);
                for (var i = 0; i < state.widgets.length; i++) {
                    state.widgets[i].position = i;

                }
                console.log(state.widgets);
            }
            newWidgetList = Object.assign(state.widgets);
            return {
                widgets: newWidgetList
            };
        case 'LESSON_SELECT':
            state.selectedLesson = action.lessonId;
                        return state;
        default: return state;
    }
}


export default WidgetReducer;