import React from 'react'

import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {YoutubeWidget} from "./YoutubeWidget";

const WidgetListComponent = ({widgets, deleteWidget, createWidget, updateWidget}) => {
    let widgetTitle;
    let widgetSelectType;
    return(
        <div>
            <h1>Widget List ({widgets.length}) </h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input ref={(node) => {widgetTitle = node}} className="form-control"/>
                    <button onClick={
                        () =>{
                            let widget = {
                                title: widgetTitle.value,
                                id: (new Date()).getTime(),
                                widgetType: widgetSelectType.value
                            };

                            createWidget(widget);
                            widgetTitle.value = '';
                        }

                    } className="btn btn-success">
                        Add Widget</button>
                    <select ref={(node) => {widgetSelectType = node}} className="form-control">
                        <option value="HEADING"> Heading Widget</option>
                        <option value="LIST"> List Widget</option>
                        <option value='YOUTUBE'>Youtube Widget </option>
                        <option value="WT1"> Widget Type 1</option>
                        <option value="WT2"> Widget Type 2</option>
                        <option value="WT3"> Widget Type 3</option>
                    </select>
                </li>
                {widgets.map((widget, index) =>
                <li className="list-group-item"
                    key={index}>
                    <button className="btn btn-danger float-right" onClick={
                        () => deleteWidget(widget.id)}>
                        Delete
                    </button>
                <div>
                    {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget} />}
                    {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget} />}
                    {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget} />}
                    {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                    {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                    {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={updateWidget}/>}

                </div>
                </li>
                )}
            </ul>
        </div>
    )
}



export default WidgetListComponent;

