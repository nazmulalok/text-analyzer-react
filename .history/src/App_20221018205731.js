import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar siteName="Aloka" />
      <div className='container my-3'>
        <TextForm heading="Enter Text to Analyze Below" />
      </div>
    </>
  );
}

export default App;


