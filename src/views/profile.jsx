import React, { useEffect, useContext } from 'react'

import ContactCard from '../components/ContactCard.jsx'
import { Context } from '../store/appContext'

const Profile = props => {
    const { store, actions } = useContext(Context)
    console.log(props)
    return (
        <>
            {
                store.currentUser === null ?
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    :
                    <div className="container mt-3">
                        <div className="row">
                            <div class="col-md-12 card">
                                
                                <img src={store.currentUser.user.avatar}  class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} class="card-img-top" alt="..."  />
                                    <h5 class="card-title">Bienvenido {store.currentUser.user.name}</h5>

                                    {
                                        store.currentUser.user.planes_id.length > 0
                                        &&
                                        <>
                                            <p class="card-text">Sa</p>
                                            <br />
                                            <p class="card-text">Actualmente tienes un plan activo con el objetivo de : &nbsp;
                                            {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.objective}</p>
                                            <br />
                                            <p class="card-text">El nombre de tu nutricionista es : &nbsp;
                                            {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name}
                                            </p>
                                            <br />
                                            <p class="card-text">El nombre de tu entrenador es : &nbsp;
                                            {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name}
                                            </p>
                                            <p class="card-text">Si tienes alguna duda que te gustaria aclarar con ellos
                                            haz click <a href='/profile/health-team'>Aqui</a>
                                            </p>
                                        </>
                                    }
                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">Edit profile</button>
                        </div>
                    </div>


            }

        </>

    )
}

export default Profile
