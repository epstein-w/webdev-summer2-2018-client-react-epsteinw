
let initialState = {
        widgets: [
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
                   {title: action.widgetTitle, id: (new Date().getTime())},
                   ...state.widgets
               ]
            }
        default: return state;
    }
}


export default WidgetReducer;