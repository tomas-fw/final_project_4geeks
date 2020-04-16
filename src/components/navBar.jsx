import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const NavBar = props => {
    return (
        <>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">APP NAME</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/about'>About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/login'>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Client Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pt-register">Personal Trainer Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/nutri-register">Nutritionist Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">My profile (private client)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">Databse summary (private admin)</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default NavBar