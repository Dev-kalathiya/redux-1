import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import { decrease, increase, reset } from './redux/Action';


const App = () => {
let data = useSelector((store)=> store);
console.log(data);


const dispatch =useDispatch()
  return (
    <div className='counter-container'>
      <h1>count :{data.count}</h1>
      <button onClick={()=>dispatch(increase())}>+</button>
      <button onClick={()=>dispatch(decrease())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>


    </div>
  );
};

export default App
