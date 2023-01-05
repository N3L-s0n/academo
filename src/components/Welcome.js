import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='container'>
                <h1>Bienvenidos</h1>        
                <p>Selecciona una opción</p>
            </div>
            <div className='container'>
                <div>
                    <h2>Escuela</h2>
                    <p>
                        Si eres estudiante de primaria elige esta opción
                    </p>
                </div>
                <div>
                    <h2>Colegio</h2>
                    <p>
                        Si eres estudiante de secundaria elige esta opción
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;