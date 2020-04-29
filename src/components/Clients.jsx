import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
/* RESPONSIVE LISTO*/

const Clients = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.adminLoadClients("/admin/client")
    }, [])
    const filteredClients = () => {
        if(!store.clients) return;

        const clientIds = store.currentUser.user.planes_id.map((plan) => plan.all_plans.client_id);
        return store.clients.filter((client) => clientIds.includes(client.id))
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h1 className="text-center">Mis clientes</h1>
                        {
                            !!store.clients ?
                                filteredClients().map((client, i) => {
                                    return (
                                        <div key={client.id} className="card border-dark m-3 p-3">
                                            <div className="row no-gutters">
                                                <div className="col-md-4 col-xs-4">
                                                    <img src={`${store.path}/static/images/avatar/clients/${client.avatar}`} className="card-img square" alt="..." />
                                                </div>
                                                <div className="col-md-8 col-xs-8">
                                                    <div className="card-body">
                                                        <Link to={`/profile/professional/clients/${client.id}`} className="btn btn-outline-dark float-right">Ver planes de cliente</Link>
                                                        <h5 className="card-title">{client.name + ' ' + client.last_name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <h1>Loading...</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients;