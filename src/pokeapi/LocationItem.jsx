import React from 'react'
import {ImLocation} from 'react-icons/im';

export const LocationItem = ({children}) => {
  return (
    <span className='mx-1 locationItem'>
        <ImLocation className='text-danger'/>{children}
    </span>
  )
}
