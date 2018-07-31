import React from 'react';

export const ImageWidget = ({widget, updateWidget}) => {
    let path;
    let name;
    return(
        <div>
            <h2>{widget.title}</h2>
            <label>
                <input className="form-control" onChange={() => {
                    widget.src = path.value;
                    updateWidget(widget);
                }}   ref={node => path = node} />
            </label>
            <label>
                <input className="form-control" onChange={() => {
                widget.title = name.value;
                updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>
            <h4>Preview</h4>
            <img src={widget.src} />
        </div>

    )
}