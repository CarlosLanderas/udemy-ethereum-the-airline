import React from "react";

export default (props) => {
   return <div className="card">
        <h5 className="card-header bg-info text-white">{props.title}</h5>
        <div className="card-body">            
            <div className="card-text">{props.children}</div>            
        </div>
    </div>
}