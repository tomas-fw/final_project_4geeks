import React from 'react';

const HealthTeam = props => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Nutritionist name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Contact my nutritionist</a>
                            </div>
                    </div>
                    <div className="col-md-6 card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Personal trainer name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Contact my personal</a>
                            </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default HealthTeam;