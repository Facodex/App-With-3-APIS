import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { JsonP } from '../components/JsonP';
import { Poke } from '../components/Poke';
import { Reqres } from '../components/Reqres';
import { PostsJsonP } from '../jsonplaceholder/PostsJsonP';
import { UsersJsonP } from '../jsonplaceholder/UsersJsonP';
import { Abilities } from '../pokeapi/Abilities';
import { Loactions } from '../pokeapi/Loactions';
import { PokemonMain } from '../pokeapi/PokemonMain';
import { PokemonsList } from '../pokeapi/PokemonsList';

export const PrincipalRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/pokeapi/*' element={<Poke />}>
                <Route path='pokemon-main' element={<PokemonMain/>}/>
                <Route path='pokemons-list' element={<PokemonsList/>}/>
                <Route path='abilities' element={<Abilities/>}/>
                <Route path='locations' element={<Loactions/>}/>
            </Route>

            <Route path='/reqres' element={<Reqres />} />

            <Route path='/jsonplaceholder/*' element={<JsonP />} >
                <Route path='users' element={<UsersJsonP/>}/>
                <Route path='posts' element={<PostsJsonP/>}/>
            </Route>

            <Route path='*' element={<Home />} />

        </Routes>

    )
}
