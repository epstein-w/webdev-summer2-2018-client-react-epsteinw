import {connect} from 'react-redux'
import WidgetListComponent from '../../components/widgets/WidgetListComponent'


const stateToPropertyMapper = state => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget: (widgetId) => dispatch({
            type: 'DELETE_WIDGET',
            widgetId: widgetId
        }),
        createWidget: (widgetTitle) => dispatch ({
            type: 'CREATE_WIDGET',
            widgetTitle: widgetTitle
        })
    }
)

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);


export default WidgetListContainer;