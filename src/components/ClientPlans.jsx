import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlansCard from "./PlansCard";
import { Link } from "react-router-dom";


const ClientPlans = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 classname="text" className="mt-3 text-center font2" >Planes anteriores</h1>
                        <Link to='/profile/' type="button" className="btn btn-outline-info ml-5 font2">Volver a mi perfil</Link>
                        <br />
                        {
                            !!store.currentUser && store.currentUser.user.planes_id.length > 0 ?
                                store.currentUser.user.planes_id.map((plan) => {
                                    return <PlansCard plan={plan} />
                                })
                                :
                                <div className="alert alert-danger m-4" role="alert">
                                    No tienes planes anteriores
                                </div>
                            //     <div className="spinner-border" role="status">
                            //     <span className="sr-only">Loading...</span>
                            // </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default ClientPlans