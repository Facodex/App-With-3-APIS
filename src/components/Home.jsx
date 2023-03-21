import React from 'react'
import {MdQueryStats} from 'react-icons/md';
import CarouselApis from './CarouselApis';

export const Home = () => {
    return (
        <div>
            <h1 className='text-primary text-center large rise title mt-5'>Query any API <MdQueryStats/></h1>
            <section className="d-flex mt-5 align-items-center">
                <div className="subtitles p-2">
                    <h3 className='subtitleHome'>Find pokemons and their abilities.</h3>
                    <h3 className='subtitleHome'>Get photos, random users and posts.</h3>
                </div>
                <CarouselApis/>
            </section>
        </div>
    )
}
