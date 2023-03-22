import React from 'react'
import AccordionReqres from '../reqres/AccordionReqres'

export const Reqres = () => {
  return (
    <div className='container mb-5'>
      <h2 className='text-primary text-center large rise title mt-5'>Welcome to Reqres.in API!!</h2>
      <div className="mt-3">
        <AccordionReqres/>
      </div>
    </div>
  )
}
