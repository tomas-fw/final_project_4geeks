import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ProfessionalProfile = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            {
                !!store.currentUser ?
                    <div className="container mt-3">
                        <div className="row">
                            <div class="col-md-12 col-xs-12 card">

                                <div class="row" /* superior*/>
                                    <div class="col-md-3 col-xs-3" /*imagen de perfil*/>
                                        <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} class="img-top ml-4 mt-3" alt="..." width="150" height="190" />
                                    </div>
                                    <div class="col-md-7 col-xs-7" /*saludo */>
                                        <h1 class="card-title mt-5">Hola {store.currentUser.user.name} {store.currentUser.user.lastname}!</h1>
                                    </div>
                                    <div class="col-md-2 col-xs-2 " /*imagen extra*/>
                                        <img src="https://picsum.photos/200/300" class="mt-4" alt="..." width="150" height="150" />
                                    </div>
                                </div>

                                <div class="container">
                                    {/* <div class="col-md col-xs mt-3 text-center alert alert-info" >
                                        Sabemos que en estos momentos te encuentras realizando cambios
                                        en tu estilo de vida y queremos ayudarte a que estos cambios sean rapido y efectivos!
                                    </div> */}

                                    <div class="card-header mt-2" >
                                        <h5> Tus clientes actuales son:</h5>
                                    </div>

                                    <div class="card-group" >
                                        {
                                            !!store.currentUser.user && !!store.currentUser.user.planes_id > 0 ?
                                                store.currentUser.user.planes_id.map((elem, i) => {
                                                    return (
                                                        <div class="card col-md-6 col-xs-6 ml-1" key={i}>
                                                            <div class="card-body ">
                                                                <div class="row" /*Nombre cliente*/>
                                                                    <div class="col-md-6 col-xs-6">
                                                                        <h5 class="card-text">Nombre cliente: </h5></div>
                                                                    <div class="col-md-6 col-xs-6 ">
                                                                        {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.client_name : ''}
                                                                    </div>
                                                                </div>
                                                                <br />

                                                                <div class="row" /*Objetivo*/>
                                                                    <div class="col-md-6 col-xs-6 ">
                                                                        <h5 class="card-text">Tu Objetivo es: </h5>
                                                                    </div>
                                                                    <div class="col-md-6 col-xs-6 ">
                                                                        {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.objective : ''}
                                                                    </div>
                                                                </div>
                                                                <br />

                                                                <div class="row" /*plan*/>
                                                                    <div class="col-md-6 col-xs-6 ">
                                                                        <h5 class="card-text">El plan que enviaste es: </h5>
                                                                    </div>
                                                                    <div class="col-md-6 col-xs-6 ">
                                                                        {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.dieta : ''}
                                                                    </div>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                                :
                                                <div className="alert alert-warning" role="alert">
                                                    {store.error} You don´t have clients in your database :(
                                                </div>
                                        }
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
export default ProfessionalProfile;