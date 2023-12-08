import React, { useState, useEffect } from 'react';
import { Title } from './Title';

const CoverMobileGame = ({ title, desc }) => {
    return (
        <div className='rounded-xl mt-5 bg-opacity-90 bg-gradient-to-l from-indigo-950/40 to-rose-800/50 w-full h-fit flex '>
            <div className='lg:w-1/2 lg:p-16 p-8  space-y-3 lg:pt-28 lg:pb-28 w-full'>
                <h1 className='font-bold lg:text-3xl text-xl text-white'>{title}</h1>
                <p className='text-gray-400 font-semibold'>{desc}</p>
            </div>
    <div className='relative w-1/2 right-0'>
        <div className='netflix-mobile-game-bg h-full w-full'/>
    </div>
        </div>
    );
}
export const MobileGame = () => {
    return (
        <div className=''>
            <Title title='Play Mobile Games' />
            <CoverMobileGame title="Mobile games now included in every plan" desc='No ads, extra fees, or in-app purchases. Enjoy unlimited access to a growing catalog of popular and exclusive games.' />
        </div>
    )
}
