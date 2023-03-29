import React, { useState, useEffect } from 'react'
import { useGetPokemons } from '../hooks/useGetPokemons';
import pokePlaces from '../assets/images/pokemon-places.jpg';
import { LocationItem } from './LocationItem';
import { DotLoader } from 'react-spinners';
import { ButtonBack } from './ButtonBack';

export const Loactions = () => {

  const [locations, setLocations] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    useGetPokemons('https://pokeapi.co/api/v2/location/', setLocations, setLoading);
  }, []);

  return (
    <div className='row mx-2 my-4 align-items-center'>
      
      <div className="col-12 col-md-6 ">
        <ButtonBack/>
        <img className='rounded w-100 mt-2' src={pokePlaces} alt='pokePlaces' />
      </div>


      <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center mt-3">
        {locations?.map((item) => <LocationItem key={item.name}>{item.name.toUpperCase()}</LocationItem>)}
        {loading && <DotLoader color="#36d7b7" />}
      </div>

      

    </div>
  )
}
