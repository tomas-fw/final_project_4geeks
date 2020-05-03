import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
const Confirmation = props => {
    const { actions } = useContext(Context)
    let token = props.match.params.token
    // useEffect(() => {
    // }, [actions, token])
    return (
        <div className="container">
            <h1>Crea Nueva Contraseña</h1>
            <hr />
            <div className="form-group modal-body">
                <label htmlFor="LoginConsuEmail" className="form-label text-muted">Ingrese Nueva Contraseña</label>
                <input type="password" name="password"  onChange={e => actions.handleChange(e)} className="form-control"></input>
                <label htmlFor="LoginConsuEmail" className="form-label text-muted">Confirmar Constraseña</label>
                <input type="password" name="confirmedPassword"  onChange={e => actions.handleChange(e)} className="form-control"></input>
                <button onClick={() => actions.getPasswordChange(token, props.history)}>Confirmar</button>
            </div>
        </div>
    )
}
export default Confirmation

