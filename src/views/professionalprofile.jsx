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
                            <div className="col-md-12 col-xs-12 card">

                                <div className="row" /* superior*/>
                                    <div className="col-md-3 col-xs-3" /*imagen de perfil*/>
                                        <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} className="img-top ml-4 mt-3" alt="..." width="150" height="190" />
                                    </div>
                                    <div className="col-md-7 col-xs-7" /*saludo */>
                                        <h1 className="card-title mt-5">Hola {store.currentUser.user.name} {store.currentUser.user.lastname}!</h1>
                                    </div>
                                    <div className="col-md-2 col-xs-2 " /*imagen extra*/>
                                        <img src="https://picsum.photos/200/300" className="mt-4" alt="..." width="150" height="150" />
                                    </div>
                                </div>

                                <div className="container">
                                    {/* <div className="col-md col-xs mt-3 text-center alert alert-info" >
                                        Sabemos que en estos momentos te encuentras realizando cambios
                                        en tu estilo de vida y queremos ayudarte a que estos cambios sean rapido y efectivos!
                                    </div> */}

                                    <div className="card-header mt-2 mb-2" >
                                        <h4> Tus clientes actuales son:</h4>
                                    </div>

                                    {
                                        !!store.currentUser.user && !!store.currentUser.user.planes_id > 0 ?
                                            store.currentUser.user.planes_id.map((elem, i) => {
                                                return (
                                                    <div className="container" >

                                                        <div className="card col-md-11 col-xs-11 ml-5 mb-3" key={i} >
                                                        <br />
                                                            <div className="row" /*Nombre cliente*/>
                                                                <div className="col-md-1 col-xs-1"></div>
                                                                <div className="col-md-5 col-xs-5 ml-3">
                                                                    <h5 className="card-text">Nombre del cliente: </h5></div>
                                                                <div className="col-md-5 col-xs-5 ">
                                                                    <h5> {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.client_name : ''}</h5>
                                                                </div>
                                                            </div>

                                                            <div className="row" /*Objetivo*/>
                                                                <div className="col-md-1 col-xs-1"></div>
                                                                <div className="col-md-5 col-xs-5 ml-3">
                                                                    <h5 className="card-text">Su Objetivo es: </h5>
                                                                </div>
                                                                <div className="col-md-5 col-xs-5 ">
                                                                <h5>  {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.objective : ''}</h5>
                                                                </div>
                                                            </div>

                                                            <div className="row" /*plan*/>
                                                            <div className="col-md-1 col-xs-1"></div>
                                                                <div className="col-md-5 col-xs-5 ml-3">
                                                                    <h5 className="card-text">El plan que enviaste es: </h5>
                                                                </div>
                                                                <div className="col-md-5 col-xs-5 ">
                                                                <h5> {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.dieta : ''}</h5>
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
                                <br />

                            </div>
                        </div>
                    </div>
                    :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            }


        </>
    )
}
export default ProfessionalProfile;