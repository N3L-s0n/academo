import './App.css';
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import About from './components/About/About'

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <About />
    </div>
  );
}

export default App;