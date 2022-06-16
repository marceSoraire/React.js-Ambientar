import React from 'react';
import './App.css';

//component
import Navigation from './components/Navigation/Navigation';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div className='App'>
      <Navigation/>
      <ItemListContainer/>
      <div>
      <Footer 
        title='Marcelo Soraire'
        subtitle='React.js Comision 37745'
        text='@Copyright'
      />
      </div>
    </div>
  );
}

export default App;