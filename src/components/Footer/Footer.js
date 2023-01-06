import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div>
                <h3>academo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div>
            <h4>Contactos</h4>
                <ul>
                    <li>+506 8888 8888</li>
                    <li>+506 8777 7777</li>
                </ul>
            </div>
            <div>
                <h4>Correo electrónico</h4>
                <ul>
                    <li>email@email.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;