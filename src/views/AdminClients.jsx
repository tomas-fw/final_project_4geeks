import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext';

const AdminClients = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])
    console.log(props)
    return (
        <>
            <div className="cointainer">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {
                            !!store.clients > 0 ?
                                store.clients.map((elem, index) => {

                                    return (
                                        <div class="list-group" key={index}>
                                            <a href={"/admin/client/"+elem.id} class={"list-group-item list-group-item-action " + (elem.is_active)}> ID : {elem.id}
                                    &nbsp;Name : {elem.name + ' ' + elem.last_name} &nbsp; Total Plans : {elem.all_plans.length} &nbsp; Email : {elem.email}</a>
                                        </div>

                                    )
                                }) :
                                <div class="alert alert-warning" role="alert">
                                    {store.errors}
                                    You have no Clients in your database :(
                                </div>

                        }
                    </div>
                </div>
            </div>




        </>

    )
}

export default AdminClients