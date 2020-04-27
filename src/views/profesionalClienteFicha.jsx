import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const ProfesionalClienteFicha = props => {
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

        <>
         <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        !!client ? (
                            <>
                                <h3 className="ml-2 mt-3">Ficha de {client.name} {client.last_name}</h3>

                                {
                                client.all_plans.map((plan) =>
                                    <div className="card my-4">
                                        <div className="card-header">
                                            <h4>Fecha del plan: {plan.detail.created}</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>Activdad física: {plan.detail.actividad_fisica}</h5>
                                            <h5>Consumo de alcohol: {plan.detail.alcohol}</h5>
                                            <h5>Alergias alimentarias: {plan.detail.alergias}</h5>
                                            <h5>Ansiedad: {plan.detail.ansiedad}</h5>
                                            <h5>Apetito: {plan.detail.apetito}</h5>
                                            <h5>Ayunos: {plan.detail.ayunos}</h5>
                                            <h5>Cirugias: {plan.detail.ciruguias}</h5>
                                            <h5>Plan creado: {plan.detail.creates}</h5>
                                            <h5>Digestion: {plan.detail.digestion}</h5>
                                            <h5>Embarazo: {plan.detail.embarazo}</h5>
                                            <h5>Enfermedades: {plan.detail.enfermedades}</h5>
                                            <h5>Lesiones: {plan.detail.lesiones}</h5>
                                            <h5>Medicamentos: {plan.detail.medicamento}</h5>
                                            <h5>Objetivo del plan: {plan.detail.objective}</h5>
                                            <h5>Orina: {plan.detail.orina}</h5>
                                            <h5>Peso actual: {plan.detail.peso}</h5>
                                            <h5>Altura actual: {plan.detail.altura}</h5>
                                            <h5>Circunferencia de cintura: {plan.detail.cintura}</h5>
                                            <h5>Signos y sintomas: {plan.detail.sintomas}</h5>
                                            <h5>Suplementos alimentarios: {plan.detail.suplementos}</h5>
                                            <h5>Tabaco: {plan.detail.tabaco}</h5>
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

    </>

    )

}
export default ProfesionalClienteFicha;