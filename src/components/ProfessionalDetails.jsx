import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const ProfessionalDetails = props => {
    const { store, actions } = useContext(Context);
    const { id, role_id } = useParams();

    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional' + '/' + role_id + '/' + id)
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            !!store.profesionals && !!store.profesionals[0] ?

                                <div className="card mt-3 mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="https://via.placeholder.com/150" className="card-img team-cards px-3 py-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title">{store.profesionals[0].name + " " + store.profesionals[0].lastname + ", " + store.profesionals[0].age}</h3>
                                                <h5 className="card-text">Especialidad:</h5>
                                                <p className="card-text">{store.profesionals[0].specialties}</p>
                                                <h5 className="card-text">Descripción:</h5>
                                                <p className="card-text">{store.profesionals[0].description}</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                {
                                                   role_id==2 && store.nutritionist_email !== null && store.nutritionist_email == store.profesionals[0].email ?
                                                        <div class="alert alert-success" role="alert">
                                                            { 'Se ha añadido a ' + store.profesionals[0].name + ' ' + store.profesionals[0].lastname + ' a tu plan'}
                                                        </div>
                                                            :                                                            
                                                            role_id == 3 && store.trainer_email !==null && store.trainer_email == store.profesionals[0].email ?
                                                            <div class="alert alert-success" role="alert">
                                                            { 'Se ha añadido a ' + store.profesionals[0].name + ' ' + store.profesionals[0].lastname + ' a tu plan'}
                                                        </div>
                                                        : ''

                                                }

                                                <div class="form-check-inline" >

                                                    <input class="form-check-input ml-4" type="radio" name={role_id == 2 ? 'nutritionist_email' : 'trainer_email'} id="exampleRadios1" value={store.profesionals[0].email} onChange={actions.handleChange} />
                                                    <label class="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                        Add to Plan    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div class="spinner-border text-info" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfessionalDetails;