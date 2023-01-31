
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';



function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <ul>
        <CountriesList/>
      </ul>
    </div>
  );
}

export default App;
