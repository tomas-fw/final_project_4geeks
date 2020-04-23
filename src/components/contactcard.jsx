import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link, useLocation } from 'react-router-dom';

const ContactCard = props => {
	const location = useLocation();
	const { store, actions } = useContext(Context);
	const { professional } = props;
	return (
		<>

			<div className="card mb-3 d-block contact-card">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/150" className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
						<div className="float-right">
							{
								!!store.currentUser && store.currentUser.user.role.name === 'client' &&
								<Link to={location.pathname + '/' + professional.role_id + '/' + professional.id} className="btn">
									Ver más información <i className="fas fa-plus"></i>
								</Link>
							}
						</div>
							<h5 className="card-title">{professional.name} {professional.lastname}</h5>
							<p className="card-text">{professional.specialties}</p>
							{
							!!store.currentUser && store.currentUser.user.role.name === 'client' &&
							<>
								<p className="small">{professional.description}</p>
							</>
							}
						</div>
					</div>
				</div>
			</div>






{/* 

			<li className="list-group-item card contact-card">
				<div className="row d-block">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img src="https://via.placeholder.com/150" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className="float-right">
							{
								!!store.currentUser && store.currentUser.user.role.name === 'client' &&
								<Link to={location.pathname + "/details"} className="btn">
									Ver más información <i className="fas fa-info"></i>
								</Link>
							}
						</div>
						<p className="name lead">{professional.name} {professional.lastname}</p>
						<p className="small">{professional.specialties}</p>
						{
							!!store.currentUser && store.currentUser.user.role.name === 'client' &&
							<>
								<p> ID del profesional: {professional.id}</p>
								<p className="small">{professional.description}</p>
							</>
						}

						<br />
					</div>
				</div>
			</li> */}
		</>

	)
}

export default ContactCard;