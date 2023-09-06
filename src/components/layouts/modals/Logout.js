import React from "react";
import { NavLink } from "react-router-dom";

function Logout() {
    return (
        <>
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">¿Desea cerrar sesión?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Seleccione el boton 'Cerrar sesión' para finalizar.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <NavLink className="btn btn-primary" to="/login" onClick={() => {

                                document.querySelector('.modal').modal('hide'); }}>
                                Cerrar sesión
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout