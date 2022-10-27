import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar siteName="Aloka" />
      <div className='container'>
        <TextForm />
      </div>
    </>
  );
}

export default App;


