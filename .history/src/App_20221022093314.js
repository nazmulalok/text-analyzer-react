import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar siteName="Aloka" />
      <div className='container my-3'>
        <TextForm heading="Enter Text to Analyze Below" />
      </div>
    </Fragment>
  );
}

export default App;


