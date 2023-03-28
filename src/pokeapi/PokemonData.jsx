import React from 'react'
import { LoaderData } from './LoaderData'
import CardPokemonData from './CardPokemonData';
import pokebola from '../assets/images/poke-bola-removebg-preview.png';

export const PokemonData = ({ pokemonInfo, loadingItem }) => {
    return (
        <div>
            {(loadingItem === null && pokemonInfo === null) && <img src={pokebola} alt='pokebola' />}
    
            <CardPokemonData pokemonInfo={pokemonInfo} loadingItem={loadingItem}/>

        </div>
    )
}
