import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
      <Home />
        <About />
        
      </div>
    </div>
  );
}

export default App;
