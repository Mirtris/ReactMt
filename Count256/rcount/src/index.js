import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const {useState} = React;

const Counter = () => {
    let [count, setCount] = useState(10);

    return(
        <div className='container' style={shadow}>
        <div className='chevron chevron-up' style={{visibility: count >= 10 && 'hidden'}}
        onClick={() => {
            setCount(count+=1);
        }}
        ></div>
        <div className='number'>{count}</div>
        <div className='chevron chevron-down' style={{visibility: count <= 0 && 'hidden'}}
        onClick={() =>{
            setCount(count-=1);
        }}
        ></div>
        </div>
    )
} // 單純回傳值時，return可以省略

const shadow = {
    boxShadow: "0 0 10px 9px #221",
    padding: 50,
};


ReactDOM.render(
   <Counter />
    , document.getElementById("root")
)