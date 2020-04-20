import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const NavBar = props => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Fit good</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            store.currentUser === null &&
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/login'>Login</a>
                                </li>
                            </>

                        }
                        <li className="nav-item active">
                            <a className="nav-link" href="/team">Health professionals<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/about'>About us</a>
                        </li>
                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'client'
                            &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My profile
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/profile">My account </a>
                                    <a className="dropdown-item" href="/profile/health-team">My health team</a>
                                    <a className="dropdown-item" href="/profile/health-plans">My health plans</a>
                                    <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name !== 'client'
                            &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My professional profile
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/profile/professional">My account </a>
                                    <a className="dropdown-item" href="/profile/professional/clients">My clients</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
        </nav>
        </>
    )
}

export default NavBar;