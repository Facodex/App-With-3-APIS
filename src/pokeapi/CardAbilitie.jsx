import React from 'react'

export const CardAbilitie = ({skill}) => {
    return (
        <div className="card bg-warning mx-auto w-75">
            <h5 className="card-header">{skill.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{skill.shortEffect}</h5>
                <p className="card-text">{skill.effect}</p>
            </div>
        </div>
    )
}
