import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div
                    className="bg-white p-5 rounded-5 text-secondary shadow"
                    style={{ width: '25rem' }}
                >
                    <div class="d-flex justify-content-center">
                        <img
                            src="./img/logo_UDEC.png"
                            alt="login-icon"
                            style={{ height: '7rem' }}
                        />
                    </div>
                    <div class="text-center fs-1 fw-bold">Login</div>
                    <div class="input-group mt-4">
                        <div className="input-group-text bg-info">
                            <img
                                src="./assets/username-icon.svg"
                                alt="username-icon"
                                style={{ height: '1rem' }}
                            />
                        </div>
                        <input
                            class="form-control bg-light"
                            type="text"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div class="input-group mt-1">
                        <div className="input-group-text bg-info">
                            <img
                                src="./assets/password-icon.svg"
                                alt="password-icon"
                                style={{ height: '1rem' }}
                            />
                        </div>
                        <input
                            class="form-control bg-light"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div class="d-flex justify-content-around mt-1">
                        <div class="d-flex align-items-center gap-1">
                            <input class="form-check-input" type="checkbox" />
                            <div className="pt-1" style={{ fontSize: '0.9rem' }}>
                                Remember me
                            </div>
                        </div>
                        <div class="pt-1">
                            <a
                                href="#"
                                className="text-decoration-none text-info fw-semibold fst-italic"
                                style={{ fontSize: '0.9rem' }}
                            >
                                ¿Olvidaste la contraseña XD?
                            </a>
                        </div>
                    </div>
                    <button class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm">
                        Ingresar
                    </button>
                    <div class="d-flex gap-1 justify-content-center mt-2">
                        <NavLink to="/registro" class="text-decoration-none text-info fw-semibold">
                            Crear nueva cuenta aquí
                        </NavLink>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login