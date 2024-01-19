import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/skills' Component={Skills}></Route>
        <Route path='/education' Component={Education}></Route>
        <Route path='/education' Component={Contact}></Route>
      </Routes>

    </div>
  );
}

export default App;
