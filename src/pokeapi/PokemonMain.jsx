import React from 'react'
import pokemons from '../assets/images/pokemones-with-background-removebg-preview.png';
import powers from '../assets/images/pokemons-powers.jpg'
import battle from '../assets/images/pokemon-battle.jpg'
import { SiPokemon } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export const PokemonMain = () => {
    return (
        <div className="d-flex flex-wrap-reverse py-3">

            <div className='col-12 col-md-7 mx-1 text-center'>

                <NavLink to='/pokeapi/pokemons-list' className='linkPokemonMain'>
                    <div className='w-100 h-100 divPokemonMain'>
                        <h3 className='d-flex align-items-center justify-content-center text-dark h3PokemonMain ' style={{fontFamily: 'Rubik'}}>
                            View list of <SiPokemon style={{ fontSize: '3em', marginLeft: '10px' }} />
                        </h3>
                        <img src={pokemons} alt="pokemons" style={{ width: '75%' }} />
                    </div>
                </NavLink>

            </div>

            <div className='col-12 col-md-4 mx-1 text-center'>

                <div>

                    <NavLink to='/pokeapi/abilities' className='linkPokemonMain'>
                        <div className='w-100 h-100 divPokemonMain'>
                            <h3 className='d-flex align-items-center justify-content-center text-dark h3PokemonMain py-2' style={{fontFamily: 'Rubik'}}>
                                Abilities
                            </h3>
                            <img src={powers} alt="powers" style={{ width: '100%', borderRadius: '15px' }} />
                        </div>
                    </NavLink>

                </div>

                <div className='mt-1'>

                    <NavLink to='/pokeapi/locations' className='linkPokemonMain'>
                        <div className='w-100 h-100 divPokemonMain'>
                            <h3 className='d-flex align-items-center justify-content-center text-dark h3PokemonMain py-2' style={{fontFamily: 'Rubik'}}>
                                Locations to battles
                            </h3>
                            <img src={battle} alt="battle" style={{ width: '100%', borderRadius: '15px' }} />
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}
