import React from 'react';
import { Context } from '../store/appContext';

const AdminProfile = props => {
    
    return (
        <>
        <div class="col-md-6 card">
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <p class="card-text">Description</p>
                        </div>
        </div>
        <div className="col-md-6">
        <button type="button" class="btn btn-outline-dark">See all clients</button>
        <button type="button" class="btn btn-outline-dark">See active clients</button>
        <button type="button" class="btn btn-outline-dark">See active professionals</button>
        <button type="button" class="btn btn-outline-dark">See all professionals</button>
        </div>
        </>
    )
}
export default AdminProfile;