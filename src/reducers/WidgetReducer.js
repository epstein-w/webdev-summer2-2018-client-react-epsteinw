
let initialState = {
        widgets: [
            {title: 'Youtube 1', id: 8, widgetType: 'YOUTUBE'},
            {title: 'Header 1', id: 9, widgetType: 'HEADING'},
            {title: 'List 1', id: 10, widgetType: 'LIST', ordered: true, listItems: 'item1\nitem2\nitem3'},
            {title: 'Widget 1', id: 11, widgetType: 'WT1'},
            {title: 'Widget 2', id: 12, widgetType: 'WT2'},
            {title: 'Widget 3', id: 13, widgetType: 'WT3'},
            {title: 'Widget 4', id: 14, widgetType: 'WT1'}]
    };

const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            return  {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':
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
        default: return state;
    }
}


export default WidgetReducer;