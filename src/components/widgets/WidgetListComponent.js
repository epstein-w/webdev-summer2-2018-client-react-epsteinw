import React from 'react'

import WidgetService from '../../services/WidgetSerivce'

import {HeadingWidget} from "./HeadingWidget";
import {ParagraphWidget} from "./ParagraphWidget";
import {LinkWidget} from "./LinkWidget";
import {ImageWidget} from "./ImageWidget";
import {ListWidget} from "./ListWidget";
import {YoutubeWidget} from "./YoutubeWidget";

class WidgetListComponent extends React.Component
{
    //({widgets, deleteWidget, createWidget, updateWidget, saveWidgets}) will be in props
    constructor(props) {
        super(props);
        let widgetTitle;
        let widgetSelectType;
        this.props.loadAllWidgets(this.props.selectedLesson);
        console.log("this props");
        console.log(this.props);
        this.widgetService = WidgetService.instance;
        this.tick = this.tick.bind(this);
    }


    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }


    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick() {
       this.props.reCheck(this.widgetService.getCurSel());
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
                            <option value="PARAGRAPH"> Paragraph  Widget</option>
                            <option value="LIST"> List Widget</option>
                            <option value="IMAGE"> Image  Widget</option>
                            <option value="LINK"> Link Widget</option>
                            <option value='YOUTUBE'>Youtube Widget </option>

                        </select>
                    </li>
                    {this.props.widgets.map((widget, index) =>
                        <li className="list-group-item"
                            key={index}>
                            <button onClick={() => this.props.downMove(widget.id)} className="float-right btn btn-outline-warning"> Down </button>
                            <button onClick={() => this.props.upMove(widget.id)} className="float-right btn btn-outline-warning"> Up </button>
                            <button className="btn btn-danger float-right" onClick={
                                () => this.props.deleteWidget(widget.id)}>
                                Delete
                            </button>
                            <div>
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget}/>}
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

