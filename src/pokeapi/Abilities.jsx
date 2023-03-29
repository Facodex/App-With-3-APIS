import React, { useEffect, useState } from 'react'
import pikaAttack from '../assets/images/pika-ataque.png';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { PropagateLoader } from 'react-spinners';
import { useGetAbilitie } from '../hooks/useGetAbilitie';
import { CardAbilitie } from './CardAbilitie';
import { ButtonBack } from './ButtonBack';

export const Abilities = () => {
  const [abilities, setAbilities] = useState(null);
  const [loading, setLoading] = useState(null);
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    useGetPokemons('https://pokeapi.co/api/v2/move/?limit=15&offset=66', setAbilities, setLoading);
  }, []);

  return (
    <div className='row pt-2'>
      <ButtonBack/>
      <div className="col-12 d-flex justify-content-center align-items-center my-2">
        <img src={pikaAttack} alt="pikaAttack" style={{width:'150px'}}/>
        <h2 style={{fontFamily:'Rubik'}} className='mx-2'>Abilities and Attacks</h2>
      </div>

      <div className="col-12 d-flex justify-content-center flex-wrap">
        {loading && <PropagateLoader style={{textAlign:'center'}} color="#36d7b7" />}
        {abilities?.map((item) => <button className='btn btn-warning mx-2 my-2' key={item.name} onClick={() => useGetAbilitie(item.name, setSkill)}>{item.name}</button>)}
      </div> 

      {skill && <CardAbilitie skill={skill}/>}
      
    </div>
  )
}
