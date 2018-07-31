import React from 'react'

import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {YoutubeWidget} from "./YoutubeWidget";

class WidgetListComponent extends React.Component
{
    //({widgets, deleteWidget, createWidget, updateWidget, saveWidgets}) will be in props
    constructor(props) {
        super(props);
        let widgetTitle;
        let widgetSelectType;
        this.props.loadAllWidgets(this.props.lesson.id);
        console.log("this props");
        console.log(this.props);
    }

    render() {
        return(
            <div>
                <button onClick={this.props.saveWidgets}
                        className="btn btn-primary float-right" > Save </button>
                <h1>Widget List </h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input ref={(node) => {this.widgetTitle = node}} className="form-control"/>
                        <button onClick={
                            () =>{
                                let widget = {
                                    title: this.widgetTitle.value,
                                    id: ((new Date()).getTime()) % 1000000,
                                    widgetType: this.widgetSelectType.value,

                                };

                                this.props.createWidget(widget);
                                this.widgetTitle.value = '';
                            }

                        } className="btn btn-success">
                            Add Widget</button>
                        <select ref={(node) => {this.widgetSelectType = node}} className="form-control">
                            <option value="HEADING"> Heading Widget</option>
                            <option value="LIST"> List Widget</option>
                            <option value='YOUTUBE'>Youtube Widget </option>
                            <option value="WT1"> Widget Type 1</option>
                            <option value="WT2"> Widget Type 2</option>
                            <option value="WT3"> Widget Type 3</option>
                        </select>
                    </li>
                    {this.props.widgets.map((widget, index) =>
                        <li className="list-group-item"
                            key={index}>
                            <button onClick={() => this.props.down(widget.id)} className="float-right btn btn-outline-warning"> Down </button>
                            <button onClick={() => this.props.up(widget.id)} className="float-right btn btn-outline-warning"> Up </button>
                            <button className="btn btn-danger float-right" onClick={
                                () => this.props.deleteWidget(widget.id)}>
                                Delete
                            </button>
                            <div>
                                {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={this.props.updateWidget} />}
                                {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={this.props.updateWidget} />}
                                {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={this.props.updateWidget} />}
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={this.props.updateWidget}/>}

                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )

    }
}

export default WidgetListComponent;

