import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Fragment } from 'react';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar siteName="Aloka" />
      <div className='container my-3'>
        {/* <TextForm heading="Enter Text to Analyze Below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;


