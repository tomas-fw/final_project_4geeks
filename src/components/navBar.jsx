import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const NavBar = props => {
    return (
        <>
        
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Fit good</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/team">Health professionals<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/about'>About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/login'>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">My profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">Database summary</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default NavBar