import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Fragment, useState } from 'react';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(light)
  return (
    <>
      <Navbar siteName="Aloka" mode={darkMode} />
      <div className='container my-3'>
        <TextForm heading="Enter Text to Analyze Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;


