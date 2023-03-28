import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const JsonP = () => {
  
  return (
    <div>
      <h2 className='text-primary text-center large rise title mt-5'>Welcome to JsonPlaceholder API!!</h2>
      
      <div className="container w-100 d-flex justify-content-around mt-3">
        <NavLink to='/jsonplaceholder/users' className='postBtnRadio'>Usuarios</NavLink>
        <NavLink to='/jsonplaceholder/posts' className='postBtnRadio'>Posts</NavLink>
      </div>
      
      <div className="container">
        <Outlet/>
      </div>
      
    </div>
  )
}
