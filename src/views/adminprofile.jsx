import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { BrowserRouter as Router, withRouter,Link } from 'react-router-dom'

const AdminProfile = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            {
                !!store.currentUser ?
                    <>
                        <div class="col-md-6 card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Bienvenido {store.currentUser.user.name}</h5>
                                <p class="card-text">Que te gustaria revisar hoy?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Link to='/admin/client' class="btn btn-outline-dark">See all clients</Link>
                            <Link to='/admin/profesional' class="btn btn-outline-dark">See all professionals</Link>
                        </div>
                    </>
                    :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>


            }
        </>

    )
}
export default AdminProfile;