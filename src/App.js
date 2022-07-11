import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//views
import Contact from './views/Contact/Contact';
import ElemenDetail from './views/ElemenDetail/ElemenDetail';
import Category from './views/Category/Category';
import FinalPurchase from './views/FinalPurchase/FinalPurchase';

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
            <Route path='/categoria/:categoria' element={<Category />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/detail/:id' element={<ElemenDetail />}></Route>
            <Route path='/categoria/:categoria/detail/:id' element={<ElemenDetail />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/finalpurchase' element={<FinalPurchase />}></Route>
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;