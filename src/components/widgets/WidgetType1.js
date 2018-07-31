import React from 'react'

export const WidgetType1 = ({widget, updateWidget}) => {
    let widgetSelectType;
    return (
        <div>
            <h3> {widget.title} - {widget.widgetType} </h3>
            <select onChange={() => {
                let newwidget = {
                    id: widget.id,
                    title: widget.title,
                    widgetType: widgetSelectType.value
                };
                updateWidget(newwidget);


            }} ref={(node) => {widgetSelectType = node}} className="form-control">
                <option value="WT1"> Widget Type 1</option>
                <option value="WT2"> Widget Type 2</option>
                <option value="WT3"> Widget Type 3</option>
            </select>
        </div>
    )
}


