import React from 'react'
import { Link } from 'react-router-dom'
import {GiStrongMan} from 'react-icons/gi'


export const Header = () => {

    // cuando quiera que un enlace aparezca activo le puedo pasar por clase "active" 
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to='/'><GiStrongMan style={{fontSize:'2em'}}/>App3Apis</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/pokeapi'>PokeApi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/jsonplaceholder'>JsonPlaceholder</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/reqres'>Reqres.in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
