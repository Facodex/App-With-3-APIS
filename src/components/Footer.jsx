import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer w-100 mt-5 bg-primary d-flex justify-content-around py-4 px-2 align-items-center'>
        <h4>&#169; Facundo Benitez</h4>
        <ul className='footerUl list-group list-group-flush'>
            <li><Link to='https://pokeapi.co/' target='_blank' className='text-light footerLinks'>pokeapi.co</Link></li> 
            <li><Link to='https://reqres.in/' target='_blank' className='text-light footerLinks'>reqres.in</Link></li>
            <li><Link to='https://jsonplaceholder.typicode.com/' target='_blank' className='text-light footerLinks'>jsonplaceholder.typicode.com</Link></li>
        </ul>
        <ul className='footerUl'>
            <li><AiFillGithub style={{fontSize:'1.5em'}}/></li>
            <li><FaLinkedinIn style={{fontSize:'1.5em'}}/></li>
            <li><SiGmail style={{fontSize:'1.5em'}}/></li>
        </ul>
    </footer>
  )
}
