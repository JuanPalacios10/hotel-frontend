import { Button } from "../../components/Button";
import { FormGroup } from "../../components/FormGroup";

export function Login() {
    return (
        <form className="cuadro">
            <h2 className="titulo">Inicio de Sesión</h2>
            <FormGroup className="datos">
                <input
                placeholder="Usuario"
                className="form-control"
                type="text"
                />
            </FormGroup>
            <FormGroup className="datos">
                <input
                placeholder="Contraseña"
                className="form-control"
                type="password"
                />
            </FormGroup>
            <p className="iniciar-sesion">
                No recuerdas tu contraseña?  <a href="#">Recuperar contraseña</a>
            </p>
            <button type="submit" className="btn-registrarme">
                Registrarme
            </button>
            <p className="iniciar-sesion">
                No tienes una cuenta?  <a href="#">Registrarse</a>
            </p>
        </form>
    )
}