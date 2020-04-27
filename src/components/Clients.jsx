import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import ContactCard from './ContactCard';

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
                    <div className="col-md-12">
                        <h1 className="text-center">My clients</h1>
                        {
                            !!store.clients ?
                                filteredClients().map((client, i) => {
                                    return (
                                        <div class="card border-dark m-3 p-3">
                                            <div class="row no-gutters">
                                                <div class="col-md-4">
                                                    <img src="https://via.placeholder.com/50" class="card-img" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <a href="#" className="btn btn-outline-dark float-right">Ver planes de cliente</a>
                                                        <h5 class="card-title">{client.name + ' ' + client.last_name}</h5>
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