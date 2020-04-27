import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link, useLocation } from 'react-router-dom';

const roleIdToString = professional => {
	if(professional.role_id === 2) {
		return "nutritionist/";
	}
	if(professional.role_id === 3) {
		return "trainer/";
	}
	return "";
}

const ContactCard = props => {
	const location = useLocation();
	const { store } = useContext(Context);
	const { professional } = props;
	console.log(professional);
	return (
		<>
			<div className="card mb-3 contact-card m-3 p-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={`${store.path}/static/images/avatar/${roleIdToString(professional)}${professional.avatar}`} className="card-img" alt="..." />
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
		</>
	)
}

export default ContactCard;