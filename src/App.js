import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';
import Achievement from './pages/Achievements';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Home />
        <About />
        <Project/>
        <Achievement/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
