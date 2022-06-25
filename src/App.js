import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//views
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Product from './views/Product/Product';
import ElemenDetail from './views/ElemenDetail/ElemenDetail';


//component
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/category/:id' element={<Product />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/detail/:id' element={<ElemenDetail />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;