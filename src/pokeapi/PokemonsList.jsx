import React, { useEffect, useState } from 'react'
import { ItemPokemonLink } from './ItemPokemonLink';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { PokemonData } from './PokemonData';
import { LoaderData } from './LoaderData';

export const PokemonsList = () => {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);

  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loadingItem, setLoadingItem] = useState(null);
  

  useEffect(() => {
    useGetPokemons('https://pokeapi.co/api/v2/pokemon/?offset0&limit=25', setPokemons, setLoading);
  }, []);

  return (
    <div className='row d-flex justify-content-between py-3'>

      <div className="col-12 text-center">
        <h3 style={{fontFamily: 'Rubik'}}>POKEMON LIST</h3>
      </div>

      {loading && <LoaderData/>}

      {pokemons &&
        <>
          <div className='col-6 py-5'>
            <ul className='d-flex flex-wrap'>
              {pokemons?.map((pokemon) =>
                <ItemPokemonLink key={pokemon.name} pokemon={pokemon} setLoadingItem={setLoadingItem} setPokemonInfo={setPokemonInfo}/>
              )}
            </ul>
          </div>

          <div className='col-6 d-flex align-items-center justify-content-center py-5'>
            <PokemonData pokemonInfo={pokemonInfo} loadingItem={loadingItem} />
          </div>
        </>
      }



    </div>

  )
}
