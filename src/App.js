import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe/AboutMe.js';
import Experiences from './pages/Experiences/Experiences.js';
import Recommended from './pages/Recommended/Recommended.js';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar is outside of <Routes>, so it will appear on every route */}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    </div>
  );
}

export default App;
