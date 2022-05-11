import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const {useState} = React;

let counters = Array.from({length: 4}, (i, index) => index);
const Counter = () => {
let [count, setCount] = useState(10)
const clickControl = (type) => () => 
    setCount(type === 'increase' ? count+1 : count-1);

    return(
        <div className="container">
            {count < 10 && <div className="chevron chevron-up" 
            onClick={clickControl('increase')}/>}
            <div className="number">
            {count}
            </div>
            {count > 0 && <div className="chevron chevron-down" 
            onClick={clickControl('decrease')}/>}
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<div 
    style={{
        display:'flex',
        flexWrap:'wrap',

}}>{counters.map((item) => (<Counter />))}</div>)