import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav>
            <div className={styles.navbar}>
                <h4>Academo.</h4>
                <ul>
                    <li>Inicio</li>
                    <li>Contactanos</li>
                    <li>Ayuda</li>
                </ul>
                <p>Ingresar</p>
            </div>
        </nav>
    );
}

export default Navbar;