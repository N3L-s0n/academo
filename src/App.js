import './App.css';
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import About from './components/About/About'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <About />
        <Footer />
    </div>
  );
}

export default App;