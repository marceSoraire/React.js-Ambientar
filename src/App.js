import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <img src={logo} className="App-logo" alt='logo'/>
      <h4>Soraire, Marcelo Andres</h4>
      <p>Comision 37745</p>
    </div>
  );
}

export default App;
