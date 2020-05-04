import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
/* RESPONSIVE */
const PasswordRequest = props => {
    const { actions } = useContext(Context)
    // useEffect(() => {
    // }, [actions, token])
    return (
        <div className="container">
            <h1 className="mt-2 text-center">Cambia tu contraseña</h1>
            <hr />
            <div className="form-group modal-body">
                <div className="row">               
                <div className="col-md-6 col-xs-6"> <label htmlFor="LoginConsuEmail" className="form-label text-muted ml-1">Ingresa tu correo</label>
                 <input type="email" name="email"  onChange={e => actions.handleChange(e)} className="form-control"></input> </div>
                <div className="col-md-6 col-xs-6"></div>
                </div>
                <br/>
                <button onClick={() => actions.getConfirmation()}>Confirmar</button>
            </div>
        </div>
    )
}
export default PasswordRequest