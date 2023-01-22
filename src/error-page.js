import { useRouteError } from "react-router-dom";
import styles from "./error-page.module.css"

const ErrorPage = () => {
    const error = useRouteError();

    console.error(error);

    return (
        <div className={styles.error_page}>
            <div>
                <h1>Lo sentimos ha ocurrido un error</h1>
                <h4>Regresa a la página de inicio</h4>
            </div>
        </div>
    );
}

export default ErrorPage;