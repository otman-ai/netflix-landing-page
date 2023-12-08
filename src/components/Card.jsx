import React from 'react'

export const Card = ({ title, Icon }) => {
    return (
        <div className='relative diagonal-gradient  rounded-xl  w-full p-3 lg:h-64 h-36 lg:p-6'>
            <h1 className=' font-bold text-white lg:text-3xl top-0 text-xl'>{title}</h1>
            <div className='absolute space-y-5 w-full flex bottom-3 justify-end right-4'>
                {Icon}
            </div>
        </div>
    )
}
