import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import of BrowserRouter, Routes, and Route
import Home from './pages/Home';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import CareerPage from './components/Career/CareerPage';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path='/'  element= {<Home/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/careers' element= {<CareerPage/>}/>
            <Route path='/blogs' element= {<Blog/>}/>
            <Route path='/services' element= {<Services/>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
