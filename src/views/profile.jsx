import React from 'react'
import Sidebar from '../components/sidebar'
import ContactCard from '../components/contacCard'
export default function Profile() {
    return (
        <div>
            {/* <!-- Side navigation --> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />

                    </div>
                    <div className="col-md-8 offset-md-4">
                        <ContactCard />
                        <ContactCard />

                    </div>
                </div>
            </div>
        </div>


    )
}
