import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage';
import Buttons from './pages/Buttons';
import Playground from './pages/Playground';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
