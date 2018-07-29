import React from 'react'

import {WidgetType1} from '../../containers/widgets/WidgetType1'
import {WidgetType2} from '../../containers/widgets/WidgetType2'
import {WidgetType3} from '../../containers/widgets/WidgetType3'

const WidgetListComponent = ({widgets, deleteWidget, createWidget}) => {
    let widgetTitle;
    return(
        <div>
            <h1>Widget List ({widgets.length}) </h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input ref={(node) => {widgetTitle = node}} className="form-control"/>
                    <button onClick={
                        () =>{createWidget(widgetTitle.value); widgetTitle.value = ''; }

                    } className="btn btn-success">
                        Add Widget</button>
                </li>
                {widgets.map((widget, index) =>
                <li className="list-group-item"
                    key={index}>
                    {widget.title} ({widget.id}) [{widget.widgetType}]
                    <button className="btn btn-danger float-right" onClick={
                        () => deleteWidget(widget.id)}>
                        Delete
                    </button>
                <div>
                    {widget.widgetType === 'WT1' && <WidgetType1/>}
                    {widget.widgetType === 'WT2' && <WidgetType2/>}
                    {widget.widgetType === 'WT3' && <WidgetType3/>}
                </div>
                </li>
                )}
            </ul>
        </div>
    )
}



export default WidgetListComponent;

