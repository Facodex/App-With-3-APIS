import React from 'react'
import { useDataPokemon } from '../hooks/useDataPokemon'

export const ItemPokemonLink = ({pokemon, setLoadingItem, setPokemonInfo}) => {
    return (
        <li key={pokemon.name} className='my-2 mx-1 liPokemonItem'>
            <button onClick={() => useDataPokemon(pokemon.name, setLoadingItem, setPokemonInfo)}>{pokemon.name.toUpperCase()}</button>
        </li>
    )
}
