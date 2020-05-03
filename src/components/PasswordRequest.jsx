import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
const PasswordRequest = props => {
    const { actions } = useContext(Context)
    // useEffect(() => {
    // }, [actions, token])
    return (
        <div className="container">
            <h1>Confirmacion cuenta</h1>
            <hr />
            <div className="form-group modal-body">
                <label htmlFor="LoginConsuEmail" className="form-label text-muted">Ingresa Tu correo</label>
                <input type="email" name="email"onChange={e => actions.handleChange(e)} className="form-control"></input>
                <button onClick={() => actions.getConfirmation()}>Confirm</button>
            </div>
        </div>
    )
}
export default PasswordRequest