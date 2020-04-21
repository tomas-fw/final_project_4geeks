import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const NavBar = props => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="/">Fit good</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            store.currentUser === null &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href='/login'>Login</Link>
                                </li>
                            </>

                        }
                        <li className="nav-item active">
                            <Link className="nav-link" href="/team">Health professionals<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/about'>About us</Link>
                        </li>
                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'client'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My profile
                            </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" href="/profile">My account </Link>
                                    <Link className="dropdown-item" href="/profile/health-team">My health team</Link>
                                    <Link className="dropdown-item" href="/profile/health-plans">My health plans</Link>
                                    <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" href="#">Logout</Link>
                                </div>
                            </li>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name !== 'client' && store.currentUser.user.role.name !== 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My professional profile
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" href="/profile/professional">My account </Link>
                                    <Link className="dropdown-item" href="/profile/professional/clients">My clients</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" href="#">Logout</Link>
                                </div>
                            </li>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Admin profile
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Links className="dropdown-item" href="/admin/profile">My Profile </Links>
                                    <Links className="dropdown-item" href="/admin/client">All Clients </Links>
                                    <Links className="dropdown-item" href="/admin/professionals">All Profesionals</Links>
                                    <div class="dropdown-divider"></div>
                                    <button className="dropdown-item" >Logout</button>                                </div>
                            </li>
                        }
                    </ul>
                </div>
        </nav>
        </>
    )
}

export default withRouter(NavBar);