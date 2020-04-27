import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlansCard from "./PlansCard";
import { Link } from "react-router-dom";


const ClientPlans = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <h1 classname="text" class="mt-3 text-center" >Planes anteriores</h1>
                <Link to='/profile/' type="button" class="btn btn-info ml-5">Volver a Mi Perfíl</Link>
                <br />
                {
                    !!store.currentUser && store.currentUser.user.planes_id.length > 0 ?
                        <div class="container">
                            <div class="row">
                                <PlansCard />
                            </div>
                        </div>
                        :
                        <div class="alert alert-danger m-4" role="alert">
                            No tienes planes anteriores
                        </div>
                    //     <div class="spinner-border" role="status">
                    //     <span class="sr-only">Loading...</span>
                    // </div>
                }
            </div>
        </>
    )
}
export default ClientPlans