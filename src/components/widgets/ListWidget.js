import React from 'react';

export const ListWidget = ({widget, updateWidget}) => {
    let textArea;
    let checkBox;

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
