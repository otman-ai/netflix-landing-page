import React from 'react'
import { CTA } from './CTA';

export const Hero = ({ title, price_desc, desc }) => {
  return (
    <div className='lg:w-2/3 text-start space-y-6 mt-48  lg:ml-36 w-full h-full'>
      <h1 className='font-extrabold lg:text-6xl text-4xl text-white'>{title}</h1>
      <h3 className='font-bold text-xl text-white'>{price_desc}</h3>
      <CTA desc={desc}/>

    </div>
  )
}
