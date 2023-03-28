import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiAtomicSlashes } from 'react-icons/gi'


export const Header = () => {

    // cuando quiera que un enlace aparezca activo le puedo pasar por clase "active" 
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-5">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-primary" to='/'><GiAtomicSlashes style={{ fontSize: '2em' }} className='mainLogo' /> App3Apis</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" aria-current="page" to='/pokeapi/pokemon-main'>PokeApi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to='/jsonplaceholder'>JsonPlaceholder</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to='/reqres'>Reqres.in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
