import React from 'react';

export const LinkWidget = ({widget, updateWidget}) => {
    let name;
    let url;
    let text;

    return (
        <div>
            <h2>Link Widget </h2>
            <label>
                <input className="form-control" onChange={() => {
                    widget.src = url.value;
                    updateWidget(widget)
                }} ref = {node => url = node}  placeholder="Link URL"/>
            </label>

            <label>
                <input className="form-control" onChange={() => {
                    widget.text = text.value;
                    updateWidget(widget)
                }} ref = {node => text = node}  placeholder="Link Text"/>
            </label>

            <label>
                <input className="form-control" onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>

            <h4>
                Preview
            </h4>
            <a href={`http://${widget.src}`}> {widget.text} </a>



        </div>
    )
}