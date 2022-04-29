import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const {useState} = React;

const Counter = () => {
    let [count, setCount] = useState(256);

    return(
        <div className='container' style={shadow}>
        <div className='chevron chevron-up'
        onClick={() => {
            setCount(count+=1);
        }}
        ></div>
        <div className='number'>{count}</div>
        <div className='chevron chevron-down'
        onClick={() =>{
            setCount(count-=1);
        }}
        ></div>
        </div>
    )
} // 單純回傳值時，return可以省略

const shadow = {
    boxShadow: "0 0 8px 8px #221",
    padding:23,
};

ReactDOM.render(
   <Counter />
    , document.getElementById("root")
)