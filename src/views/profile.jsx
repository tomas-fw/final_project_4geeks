import React, { useEffect, useContext } from 'react'

import ContactCard from '../components/contactcard'
import { Context } from '../store/appContext'

const Profile = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="col-md-6 card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <p class="card-text">Description</p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit profile</button>
                </div>
            </div>
        </>

    )
}

export default Profile
