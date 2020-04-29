import React from 'react'
import nutritionistImage from '../images/nutritionist.jpg';
import personalImage from '../images/personal.jpg';
import { Link } from 'react-router-dom';

const OurTeam = props => {
    
    return (
        <>
        <div className="container">
            <h1 className="font my-4">Obtén tu equipo especializado hoy</h1>
            <div className="row">
                <div className="card col-md-6 bg-transparent homeCard">
                    <div className="card text-dark bg-transparent rounded-0 homeCard">
                        <img src={nutritionistImage} className="card-img homeImg" />
                        <div className="col-8 m-auto">
                        <Link className="btn btn-outline-info my-3" to="/nutritionists">Conoce nuestros nutricionistas</Link>
                        </div>
                    </div>
                </div>
                <div className="card col-md-6 bg-transparent homeCard mb-4">
                    <div className="card text-dark bg-transparent rounded-0 homeCard">
                        <img src={personalImage} className="card-img homeImg" />
                        <div className="col-8 m-auto">
                        <Link className="btn btn-outline-info my-3" to="/personal-trainers">Conoce nuestros entrenadores</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default OurTeam;