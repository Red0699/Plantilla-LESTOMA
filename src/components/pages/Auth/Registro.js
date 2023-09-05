import React from 'react';
import { NavLink } from 'react-router-dom';

function Registro() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-200 py-4">
                <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: '30rem' }}>
                    <div className="d-flex justify-content-center">
                        <img src="./img/logo_UDEC.png" alt="login-icon" style={{ height: '7rem' }} />
                    </div>
                    <div className="text-center fs-1 fw-bold">Formulario de registro</div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nombre
                            </label>
                            <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo Electrónico
                            </label>
                            <input type="email" className="form-control" id="email" placeholder="correo@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirmar Contraseña
                            </label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar Contraseña" />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-info text-white fw-semibold shadow-sm">
                                Registrarse
                            </button>
                        </div>
                    </form>
                    <div className="d-flex gap-1 justify-content-center mt-2">
                        <p>
                            ¿Ya tienes una cuenta?{' '}
                            <NavLink to="/login" className="text-decoration-none text-info fw-semibold">
                                Iniciar sesión aquí
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro