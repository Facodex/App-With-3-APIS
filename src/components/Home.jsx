import React from 'react'
import pokeApi from '../assets/images/pokeapi.png';
import reqres from '../assets/images/reqres-in.png';
import jsonP from '../assets/images/json-placeholder.png';

export const Home = () => {
    return (
        <div>
            <h1>Here a title...</h1>
            <img src={jsonP} alt="jsonP"/>
            <img src={reqres} alt="reqres"/>
            <img src={pokeApi} alt="pokeApi"/>
        </div>
    )
}
