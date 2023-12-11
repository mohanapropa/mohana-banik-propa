import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';
import Achievement from './pages/Achievements';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Home />
        <About />
        <Project/>
        <Achievement/>
      </div>
    </div>
  );
}

export default App;
