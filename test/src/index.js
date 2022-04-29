import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const Test = () => {
    let Num = 522;
    return( 
        <div className="test">{Num}</div>

    )
}
ReactDOM.render(<Test />, document.getElementById("root"))