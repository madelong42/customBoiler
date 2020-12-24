import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import './app.css';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state)=> ({
    ...state.countReducer
  }), shallowEqual);

  // const { count } = useSelector(({ countReducer })=> countReducer, shallowEqual);

  // const name = useSelector(state=> state.nameReducer.name);

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
      <div id='test'>
        <div className='asd'>
          <h1 className='count'>{`Counter: ${count}`}</h1>
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
        </div>
        <div>
          <h1 className='name'>{`Name: ${name}`}</h1>
          <input placeholder='Input your name' onChange={updateName}/>
        </div>
      </div>
    </>
  );
}

export default hot(App);
