import React from 'react';
import nutritionImage from '../images/nutrition.jpg';
import fitnessImage from '../images/fitness.jpg';
import jumbotronImage from '../images/jumbotron.jpg';
import person1Image from '../images/person1.jpg';
import person2Image from '../images/person2.jpg';
import person3Image from '../images/person3.jpg';
import { Link } from 'react-router-dom';



const Home = props => {

    return (
        <>
            <div className="container-fluid">

                {/* Jumbotron */}
                <div className="row">
                    <div className="col">


                    </div>
                </div>
                <h1 className="font m-5">Dos ingredientes esenciales...</h1>
                <div className="row">
                    {/* Cards */}
                    <div className="col-md-6">
                        <div className="card bg-transparent homeCard ml-5">
                            <img className="card-img-top card-img homeImg" src={nutritionImage} alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title font">Nutrición</h2>
                                <p className="card-text font2">Una vida saludable comieza en la cocina</p>
                                <Link to="/nutritional-education" className="btn btn-outline-info">Por qué necesitamos una dieta especializada? </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-transparent homeCard">
                            <img className="card-img-top card-img bg-transparent homeImg" src={fitnessImage} alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title font">Entrenamiento fisico</h2>
                                <p className="card-text font2">Nuestro cuerpo está diseñado para estar en movimiento</p>
                                <Link to="/fitness-education" className="btn btn-outline-info">Aprende la mejor manera de cuidar de el</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <h1 className="font m-5">Que dicen nuestros clientes?</h1>
                <div className="row">
                    <div className="card-group">
                        <div className="card bg-transparent homeCard ml-4">
                            <img src={person2Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Anna</h5>
                                <p className="card-text font2">"Muy buena experiencia con mi equipo. Recomendado!"</p>
                            </div>
                        </div>
                        <div className="card bg-transparent homeCard">
                            <img src={person1Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Ignacio</h5>
                                <p className="card-text font2">"Desde que empecé a usar esta app, he visto resultados positivos en mi cuerpo"</p>
                            </div>
                        </div>
                        <div className="card bg-transparent homeCard">
                            <img src={person3Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Francisca</h5>
                                <p className="card-text font2">"Tener un plan personalizado ha cambiado mi estilo de vida"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home;