import React from 'react';

export const ParagraphWidget = ({widget, updateWidget}) => {
    let text;
    let name;
    return (
        <div>
            <h1> {widget.title} </h1>
            <label>
                <input className="form-control" onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>
            <textarea className="form-control" onChange={() => {
                widget.text = text.value;
                updateWidget(widget);
            }} ref={node => text = node} placeholder="Text goes here...">
            </textarea>

            <h4> Preview </h4>
            <p>{widget.text}</p>
        </div>
    )
}