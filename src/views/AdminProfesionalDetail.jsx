import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'


const ProfesionalDetail = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadProfesionals(props.location.pathname);
    }, [])
    return (
        <>
            <div className="cointainer mt-4" id="adminprofile">

                <Link to='/admin/profile' class="btn btn-danger mt-3 ml-5">Volver a Administrador </Link>
                <Link to='/admin/profesional' class="btn btn-warning mt-3 ml-3">Ir a Profesionales</Link>
                <Link to='/admin/client' class="btn btn-primary mt-3 ml-3">Ir a Clientes</Link>
                <br />
                <br />
                <div className="cointainer" >
                    <div className="row">
                        <div className="container">

                            {
                                !!store.profesionals && store.profesionals.length > 0 ?
                                    <>
                                        <div class="col-md-12">
                                            <h1 class="text-center">Información detallada del Profesional</h1>
                                            <br />

                                            <div class="card-deck">
                                                <div class="card col-md-11 ml-5">
                                                    <div class="card-deck">
                                                        <div class="col-md-8 mt-3 mb-3 ml-3">
                                                            <h5>Nombre: {store.profesionals[0].name}</h5>
                                                            <h5>Nombre: {store.profesionals[0].lastname}</h5>
                                                            <h5>Descripción: {store.profesionals[0].description ? " " : "Sin información"}</h5>
                                                            <h5>Usuario: {store.profesionals[0].email}</h5>
                                                            <h5>ID: {store.profesionals[0].id}</h5>
                                                            <h5>Status: {store.profesionals[0].is_active ? "Activo" : "Inactivo"}</h5>
                                                            <h5>Fecha de registro: {store.profesionals[0].register_date}</h5>
                                                            <h5>Profesional: {store.profesionals[0].role_id}</h5>
                                                            <h5>Especialidades: {store.profesionals[0].specialties}</h5>
                                                            <h5>Título: <Link> {store.profesionals[0].profesional_title} </Link></h5>
                                                            <h5>Antecedentes: <Link> {store.profesionals[0].background} </Link></h5>
                                                        </div>
                                                        <div class="col-md-3 mt-4 mr-2">
                                                            <img src="https://picsum.photos/200/300" class="img-top rounded-circle" alt="avatar" width="200" height="200" />
                                                        </div>
                                                    </div>

                                                    <div class="card-header">
                                                        <form onSubmit={() => actions.changeActiveStatus(props.location.pathname)}>
                                                            <div class="form-check-inline" >
                                                                <input class="form-check-input ml-4" type="radio" name="is_active" id="exampleRadios1" value={!store.profesionals[0].is_active} onChange={actions.handleChange} />
                                                                <label class="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                                    {!store.profesionals[0].is_active === true ? "Activate" : "Desactivate"}   </label>

                                                                <button type="submit" class="btn btn-secondary btn-block">Change status</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </>

                                    :
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfesionalDetail