import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams, Link } from 'react-router-dom';

const ProfessionalClientPlans = props => {
    const [client, setClient] = useState();
    const { store } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        fetch(store.path + "/admin/client/" + id, {
            method: 'GET',
            headers: {
                "Content-type": 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data && data.length > 0) {
                    setClient(data[0])
                }
            })

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        !!client ? (
                            <>
                                <h3 className="ml-2 mt-3">Nombre del cliente: {client.name} {client.last_name}</h3>

                                {
                                client.all_plans.map((plan) =>
                                    <div className="card my-4">
                                        <div className="card-header">
                                            <h4>Detalles del plan</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>Nutricionista:</h5>
                                            <p className="card-title">{plan.detail.nutritionist_name}</p>
                                            <h5>Personal Trainer:</h5>
                                            <p className="card-text">{plan.detail.trainer_name}</p>
                                            <h5>Objetivo:</h5>
                                            <p className="card-text">{plan.detail.objective}</p>
                                            <h5>Fecha de inicio:</h5>
                                            <p className="card-text">{plan.detail.created}</p>
                                            <Link to={"/profile/professional/clients/" + client.id + "/plans/" + plan.detail.id + "/diet"} type="button" className="btn btn-primary ml-4 mr-5">Pauta alimentaria</Link>
                                            <Link to={"/profile/professional/clients/" + client.id + "/plans/" + plan.detail.id + "/training"} type="button" className="btn btn-warning mr-5">Pauta de ejercicios</Link>
                                            <Link to={"/profile/professional/clients/" + client.id + "/ficha"} type="button" className="btn btn-danger">Ficha del cliente</Link>
                                            <Link to={ store.currentUser.user.role.id == 2 ?
                                             "/profile/professional/clients/contact/nutritionist/"+id +'/'+plan.detail.id :
                                             "/profile/professional/clients/contact/trainer/"+id+'/'+plan.detail.id  } type="button" className="btn btn-primary ml-5">Contactar al cliente</Link>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) :
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}
export default ProfessionalClientPlans;