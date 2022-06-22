import { useState } from 'react';
import './App.css';

//component
import Navigation from './components/Navigation/Navigation';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ApiGet from './components/ApiGet/ApiGet';
// import Loading from './components/Spiner/Spiner';
import Footer from './components/Footer/Footer';

const App = () => {

  const [load, setLoad] = useState(true);

  return (
    <div className='App'>
      <div><Navigation /></div>
      <button onClick={() => setLoad(!load)} className='btn-cambio'>
        Detalles
      </button>
      {load ? <ItemListContainer/> : <ItemDetailContainer/>}
      <div><Footer /></div>
    </div>
  );
}

export default App;