import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
/* RESPONSIVE LISTO*/

const HealthTeam = props => {
    const { store, actions } = useContext(Context)

    /* linea 26 llama al ultimo nutri*/
    return (
        <>
            <div className="container">

                <h1 className="text-center mt-3 mb-3">Mi equipo de profesionales </h1>

                {
                    store.currentUser === null ?
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        :
                        store.currentUser.user.planes_id.length == 0 ?
                            <div class="alert alert-warning" role="alert">
                                {store.error}
                                    No tienes ningun plan contratado :(
                                </div>
                            :

                            <div className="container">
                                <div className="row">

                                    <div className="col-md-5 col-xs-5 card border-success mt-4 ml-3">
                                        <img src={store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_avatar} className="card-img-top" alt="..." width="150" height="150" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_last_name} </h5>
                                            <p className="card-text">Hola! Soy tu Nutricionista, si tienes alguna duda y necesitas contactarme, haz click en el siguiente botón </p>
                                            <Link to={"/profile/professional/clients/contact/nutritionist/" +
                                                store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.client_id + '/' +
                                                store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.id} className="btn btn-success">Contactar a mi nutricionista</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-1 col-xs-1"></div>
                                    <div className="col-md-5 col-xs-5 card border-warning mt-4 ml-3">
                                        <img src={store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_avatar} className="card-img-top" alt="..." width="150" height="150" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_last_name}</h5>
                                            <p className="card-text">Hola! Soy tu Personal Trainer, si tienes alguna duda y necesitas contactarme, haz click en el siguiente botón</p>
                                            <Link to={"/profile/professional/clients/contact/trainer/" +
                                                store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.client_id + '/' +
                                                store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.id} className="btn btn-warning">Contactar a mi entrenador</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                }
            </div>

        </>
    )
}
export default HealthTeam;