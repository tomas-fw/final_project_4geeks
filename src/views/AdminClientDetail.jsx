import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

/* RESPOSIVE LISTO*/

const ClientDetail = props => {
    console.log(props.location.pathname)
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])

    return (
        <>
            <div className="cointainer mt-4" id="adminprofile">
                <Link to='/admin/profile' class="btn btn-danger ml-5 mt-4">Volver a Administrador </Link>
                <Link to='/admin/client' class="btn btn-primary ml-2 mt-4">Volver a Clientes</Link>
                <Link to='/admin/profesional' class="btn btn-warning ml-2 mt-4">Volver a Profesionales</Link>
                <br />
                <br />
                <div className="cointainer" >
                    <div className="row">
                        <div className="container">

                            {
                                !!store.clients &&
                                <div class="col-md-12">
                                    <h1 class="text-center">Información detallada del cliente</h1>
                                    <br />
                                    <div class="card-deck">
                                        <div class="card col-md-11 ml-5">
                                            <div class="card-deck">
                                                <div class="col-md-8 mt-3 mb-3 ml-3">
                                                    <h5>Nombre: {store.clients[0].name}</h5>
                                                    <h5>Apellido: {store.clients[0].last_name}</h5>
                                                    <h5>ID cliente: {store.clients[0].id}</h5>
                                                    <h5>Status: {store.clients[0].is_active ? "Activo" : "Inactivo"}</h5>
                                                    <h5>Total Planes: {store.clients[0].all_plans.length}</h5>
                                                    <h5>Inscripción: {store.clients[0].date_created}</h5>
                                                    <h5>Usuario: {store.clients[0].email}</h5>
                                                </div>
                                                <div class="col-md-3 mt-4 mr-2">
                                                    <img src="https://picsum.photos/200/300" class="img-top rounded-circle" alt="avatar" width="200" height="200" />
                                                </div>
                                            </div>

                                            <div class="card-header">
                                                <form onSubmit={(e) => actions.changeActiveStatus(e, props.location.pathname)}>
                                                    <div class="form-check-inline" >
                                                        <input class="form-check-input ml-4" type="radio" name="is_active" id="exampleRadios1" value={!store.clients[0].is_active} onChange={actions.handleChange} />
                                                        <label class="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                            {!store.clients[0].is_active === true ? "Activate" : "Desactivate"}   </label>

                                                        <button type="submit" class="btn btn-secondary btn-block">Change status</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientDetail;
