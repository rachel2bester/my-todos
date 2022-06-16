import React, {useState} from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Tasks from './containers/Tasks/Tasks';

function App() {

  const onReset = () => {

  }
  return (
    <div className="App">
      <Header />
      <Tasks/>
    </div>
  );
}

export default App;
