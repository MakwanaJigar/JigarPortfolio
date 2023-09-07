import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import Home from './COMPONENTS/Home';
import Project from './COMPONENTS/Project';
import Contact from './COMPONENTS/Contact';
import About from './COMPONENTS/About';

function App() {
  return (
    <div className="App">
     <Navbar />

    <Routes>

      {/* <Route path='/' element={<Home />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/> */}

    </Routes>
    
    </div>
  );
}

export default App;
