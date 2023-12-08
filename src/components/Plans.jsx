import React from 'react'
import { Title } from './Title'
const Plan = ({ planTitle, planDesc, planPrice }) => {
  return (<div className='h-fit  lg:h-48    lg:p-8 p-6 rounded-xl bg-gradient-to-b from-rose-800 to-rose-950 lg:space-y-3 space-y-2 mt-2 w-full'>
    <h1 className='text-gray-100 text-2xl uppercase font-bold'>{planTitle}</h1>
    <p className='text-gray-300 text font-semibold'>{planDesc}</p>
    <p className='text-gray-300 text font-bold'>MAD {planPrice}/month</p>
  </div>); 
}
export const Plans = () => {
  return (
    <div className='space-y-6 '>
      <Title title="A Plan To Suit Your Needs" />
      <div className='lg:flex lg:space-x-5  items-center justify-center w-full '>
        <Plan planTitle="basic"
          planDesc="A great way to enjoy all your favorite shows and movies on a budget."
          planPrice="35" />
        <Plan
          planTitle="standard"
          planDesc="All the entertainment you love, in Full HD video quality."
          planPrice="65" />
        <Plan
          planTitle="premuim"
          planDesc="A cinematic experience with the best picture and audio quality."
          planPrice="95" />
      </div>
    </div>
  )
}
