import React from 'react'

export const HeadingWidget = ({widget, updateWidget}) => {
    let text;
    let size;
    let name;
    return (
        <div>
        <h1> {widget.title} </h1>
            <label className="form-control" htmlFor="text">
                Heading Text
                <input onChange={() => {
                    widget.text = text.value;
                    updateWidget(widget);
                }}
                ref={node => text = node} className="form-control" placeholder="Heading Text"  id="text"/>
            </label>
            <label className="form-control" htmlFor="size">
                Heading Size
                <select onChange={() => {
                    widget.size = parseInt(size.value);
                    updateWidget(widget);
                }} ref={node => size = node} id="size" className="form-control">
                    <option value="1"> Heading 1 </option>
                    <option value="2"> Heading 2 </option>
                    <option value="3"> Heading 3 </option>
                    <option value="4"> Heading 4 </option>
                </select>
            </label>
            <label>
                <input className="form-control" onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>

            <h4>Preview</h4>

            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
        </div>
    )
}