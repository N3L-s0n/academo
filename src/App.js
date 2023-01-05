import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
    </div>
  );
}

export default App;