import React from 'react';

export const ListWidget = ({widget, updateWidget}) => {
    let textArea;
    let checkBox;
    let name;
    return (
        <div>
            <h3>List Widget - {widget.title}</h3>
            <textarea ref={node => textArea = node}
                      onChange={() => {
                widget.listItems = textArea.value;
                updateWidget(widget);
            }}
                       className="form-control" value={widget.listItems}></textarea>
            <label htmlFor='orderedCheckBox'>
                <input id='orderedCheckBox' ref={node => checkBox = node} checked={widget.ordered} type="checkbox"
                        onClick={() => {
                            widget.ordered = checkBox.checked
                            updateWidget(widget);
                        }}
                />Ordered
            </label>
            <label>
                <input className="form-control" onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>

            <h4>Preview</h4>
            {!widget.ordered &&
            <ul>
                {widget.listItems && widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            }

            {widget.ordered &&
            <ol>
                {widget.listItems && widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            }
        </div>
    )
}
