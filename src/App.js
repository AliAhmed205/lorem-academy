import './App.css';
import './css/Animation.css';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./components/Home";
import Schedule from './components/Schedule';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
