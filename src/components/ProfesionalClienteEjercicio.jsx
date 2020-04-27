import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const ProfesionalClienteEjercicio = props => {
    const [client, setClient] = useState();
    const { store, actions } = useContext(Context);
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
                                <Link to={"/profile/professional/clients/" + client.id} type="button" class="btn btn-secondary ml-4 mr-5">Volver al cliente</Link>
                                <h2 className="text-center mb-4">Plan de Ejercicio</h2>

                                {
                                    client.all_plans.map((plan) =>
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Detalles del plan</h4>
                                            </div>
                                            <div className="card-body">
                                                <img src={plan.detail.entrenamiento}></img>
                                            </div>
                                        </div>
                                    )}
                            </>
                        ) :
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }


                    <form /* DANI DEBE COMPLETAR ESTA FUNCION*/>
                        <div className="container" >
                        <br/>
                            <div className="row"><h4> Plan de Ejercicio</h4></div> 
                            <div className="form-group row">
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"
                                    onChange={actions.handleChangeFiles}
                                    name="workout" />
                                <br />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Cargar plan</button>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default ProfesionalClienteEjercicio;