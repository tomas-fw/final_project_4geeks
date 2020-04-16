import React from 'react'
import ContactCard from '../components/contacCard'

const Home = props => {

    return (
        <div className="container">
        <div>
         
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list">
                    <ContactCard  />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </ul>
            </div>
        </div>
    </div>

    )
}
export default Home