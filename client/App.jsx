import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './app.css';

const App = ()=> {
  const { count, name } = useSelector((state)=> ({
    ...state.countReducer,
    ...state.nameReducer
  }));
  const dispatch = useDispatch();

  const add = ()=> {
    dispatch({
      type: 'ADD'
    });
  };

  const subtract = ()=> {
    dispatch({
      type: 'SUBTRACT'
    });
  };

  const updateName = (e)=> {
    dispatch({
      type: 'UPDATE_NAME',
      payload: e.target.value
    });
  };

  return (
    <>
      <div className='test'>
        <h1>{`Counter: ${count}`}</h1>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </div>
      <h1>{`Name: ${name}`}</h1>
      <div>
        <input placeholder='Input your name' onChange={updateName}/>
      </div>
    </>
  );
};

export default hot(App);
