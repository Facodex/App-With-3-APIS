import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { JsonP } from '../components/JsonP';
import { Poke } from '../components/Poke';
import { Reqres } from '../components/Reqres';
import { PostsJsonP } from '../jsonplaceholder/PostsJsonP';
import { UsersJsonP } from '../jsonplaceholder/UsersJsonP';

export const PrincipalRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/pokeapi' element={<Poke />} />

            <Route path='/reqres' element={<Reqres />} />

            <Route path='/jsonplaceholder/*' element={<JsonP />} >
                <Route path='users' element={<UsersJsonP/>}/>
                <Route path='posts' element={<PostsJsonP/>}/>
            </Route>

            <Route path='*' element={<Home />} />

        </Routes>

    )
}
