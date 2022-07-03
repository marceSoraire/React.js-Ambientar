import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//views
import Contact from './views/Contact/Contact';
import ElemenDetail from './views/ElemenDetail/ElemenDetail';

//component
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import CartProvider  from './components/CartContext/CartContext';

const App = () => {

  return (
    <Router>
      <CartProvider>
        <div className='App'>
          <Navigation />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/detail/:id' element={<ElemenDetail />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;