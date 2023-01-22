import styles from './App.module.css';

import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.app}>
        <Navbar />

        <div className={styles.welcome}>
          <h1>Bienvenidos</h1>
          <h4>Selecciona una opción</h4>
        </div>

        <div className={styles.options}>
          <div>
              <h3>Escuela</h3>
              <p>
                  Si eres estudiante de escuela elige esta opción
              </p>
          </div>

          <div>
              <h3>Colegio</h3>
              <p>
                  Si eres estudiante de colegio elige esta opción
              </p>
          </div>
        </div>

        <About />
        <Footer />
    </div>
  );
}

export default App;