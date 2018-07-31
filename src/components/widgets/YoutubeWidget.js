import React from 'react'

export const YoutubeWidget = ({widget, updateWidget}) => {
    let src;
    let name;
    return(
        <div>
            <h3> Youtube Widget</h3>
            <label>
            <input ref={node => src = node} onChange={() => {
               widget.src = src.value;
               updateWidget(widget);
            }} id='URL' className='form-control'/>
            </label>
            <label>
                <input className="form-control" onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }} ref = {node => name = node}  placeholder="Widget Name"/>
            </label>
            <h4> Preview </h4>

            <iframe width="560" height="315"
                    src={`https://www.youtube.com/embed/${widget.src}`}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    )
}

