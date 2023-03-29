import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';

export const ButtonBack = () => {
  return (
    <Link to='/pokeapi' className='btn btn-primary w-25'> <BiArrowBack/> Back</Link>
  )
}
