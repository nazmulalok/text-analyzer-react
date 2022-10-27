import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Fragment, useState } from 'react';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
  }
  return (
    <>
      <Navbar siteName="Aloka" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextForm heading="Enter Text to Analyze Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;


