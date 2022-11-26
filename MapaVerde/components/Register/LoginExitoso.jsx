//Este aun no esta implementado
export const Register = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h2>¡Cuenta Creada con exito!</h2>
        <form className="loginExitoso-form" onSubmit={handleSubmit}>
            <button type="submit"><strong>Iniciar Sesión </strong></button>
        </form>
    </div>
    )
}