import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Fragment, useState } from 'react';
import About from './components/About';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042541';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Fragment>
      <Navbar siteName="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <div className='container my-5' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <TextForm heading="Play With Your Text Below" mode={mode} />
        {/* <About /> */}
      </div>
    </Fragment>
  );
}

export default App;


