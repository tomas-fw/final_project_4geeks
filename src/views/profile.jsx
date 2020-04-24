import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
/* RESPONSIVE LISTO*/
const Profile = props => {
    const { store, actions } = useContext(Context)
    console.log(props)
    return (
        <>
 {
                !!store.currentUser ?
                    <div className="container mt-3">
                        <div className="row">
                            <div class="col-md-12 col-xs-12 card">

                                <div class="row" name="superior">
                                    <div class="col-md col-xs" name="imagen de perfil cliente">
                                        <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} class="img-top ml-4 mt-3" alt="..." width="150" height="150" />
                                    </div>
                                    <div class="col-md col-xs" name="saludo">
                                        <h1 class="card-title mt-5">Hola {store.currentUser.user.name}!</h1>
                                    </div>
                                    <div class="col-md-3 col-xs-3 " name="imagen extra">
                                        <img src="https://picsum.photos/200/300" class="ml-4 mt-3" alt="..." width="150" height="150" />
                                    </div>
                                </div>

                                <div class="container">
                                    <div class="col-md col-xs mt-3 text-center alert alert-info" >
                                        Sabemos que en estos momentos te encuentras realizando cambios
                                        en tu estilo de vida y queremos ayudarte a que estos cambios sean rapido y efectivos!
                                    </div>

                                    <div class="card-header" /* titulo detalles del plan */>
                                        <h5>Tu plan actual es el siguiente</h5>
                                    </div>

                                    <div class="card-body ">
                                        <div class="row" /*Fecha inicio*/>
                                            <div class="col-md-3 col-xs-3"></div>
                                            <div class="col-md-3 col-xs-3">
                                                <h5 class="card-text">Fecha inicio de inicio: </h5></div>
                                            <div class="col-md-4 col-xs-4 ">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.created}
                                            </div>
                                        </div>
                                        <br />

                                        <div class="row" /*Objetivo*/>
                                            <div class="col-md-3 col-xs-3"></div>
                                            <div class="col-md-3 col-xs-3">
                                                <h5 class="card-text">Tu Objetivo es: </h5>
                                            </div>
                                            <div class="col-md-4 col-xs-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.objective}
                                            </div>
                                        </div>
                                        <br />

                                        <div class="row" /*Nutricionsita */> 
                                            <div class="col-md-3 col-xs-3"></div>
                                            <div class="col-md-3 col-xs-3">
                                                <h5 class="card-text">Tu Nutricionista es: </h5>
                                            </div>
                                            <div class="col-md-4 col-xs-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_last_name}
                                            </div>
                                        </div>
                                        <br />

                                        <div class="row" /*personal trainer*/>
                                            <div class="col-md-3 col-xs-3"></div>
                                            <div class="col-md-3 col-xs-3">
                                                <h5 class="card-text">Tu Personal Trainer es: </h5>
                                            </div>
                                            <div class="col-md-4 col-xs-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_lastname}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br />

                                 <div class="row">
                                    <div class="col-md-5 col-xs-4">
                                        <a href='/profile/client/health-team' type="button" class="btn btn-primary ml-4">Contactar a mi equipo de salud</a>
                                    </div>
                                    <div class="col-md-4 col-xs-4">
                                        <a href='/profile/client/plans' type="button" class="btn btn-warning ">Ver mis planes anteriores</a>
                                    </div>
                                    {/* <div class="col-md-3 col-xs-3">
                                        <h5 class="card-text mt-2">Contactar a mi entrenador </h5>
                                        <a href='#' type="button" class="btn btn-secondary">Contactar</a>
                                    </div> */}
                                    <div class="col-md-3 col-xs-4">
                                        <a href='/profile/client/nuevo-plan' type="button" class="btn btn-success ml-2">Contratar un nuevo plan</a>
                                    </div>
                                </div> 
                                <br />
                            </div>
                        </div>
                    </div>
                    :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
            }


        </>

    )
}


export default Profile
