import React from 'react'

import ContactCard from '../components/contacCard'

const  Profile=props=> {
    return (
        <div>
            {/* <!-- Side navigation --> */}
            <div className="container-fluid">
                <div className="row">
                   
                    <div className="col-md-8 ">
                        <h3>Information about my Nutritionist and P.T</h3>
                        <br/>
                        <ContactCard />
                        <ContactCard />

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile
