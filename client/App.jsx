// import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useSelector } from 'react-redux';
// import { increment, decrement, reset } from './Redux/store';
import './app.css';

const App = ()=> {
  const counter = useSelector((state)=> state);
  return (
    <div className='test'>
      <h1>{counter}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

// const mapDispatchToProps = { increment, decrement, reset };

export default App;
