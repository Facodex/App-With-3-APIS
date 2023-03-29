import React, { useEffect, useState } from 'react'
import { ItemPokemonLink } from './ItemPokemonLink';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { PokemonData } from './PokemonData';
import { LoaderData } from './LoaderData';
import { ButtonBack } from './ButtonBack';

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

      <ButtonBack/>

      <div className="col-12 text-center">
        <h3 style={{fontFamily: 'Rubik'}}>POKEMON LIST</h3>
        {loading && <LoaderData className='mx-auto'/>}
      </div>

      {pokemons &&
        <>
          <div className='col-md-6 py-5'>
            <ul className='d-flex flex-wrap'>
              {pokemons?.map((pokemon) =>
                <ItemPokemonLink key={pokemon.name} pokemon={pokemon} setLoadingItem={setLoadingItem} setPokemonInfo={setPokemonInfo}/>
              )}
            </ul>
          </div>

          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <PokemonData pokemonInfo={pokemonInfo} loadingItem={loadingItem} />
          </div>
        </>
      }



    </div>

  )
}
