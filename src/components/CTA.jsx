import React from 'react'

export const CTA = ({desc}) => {
  return (
    <div className='space-y-3'>
    <p className=' text-lg text-gray-400'>{desc}</p>
    <div className='lg:flex lg:space-x-3 '>
      <input
        type="email"
        name="email"
        id="email"
        className='bg-gray-900 bg-opacity-50 rounded w-full p-3 lg:w-96 border-2 border-green-700 appearance-none focus:outline-none focus:ring text-gray-200' placeholder='Email' />
      <button
        className='lg:mt-0 mt-4 bg-red-600 text-2xl font-bold text-white px-9 py-3 rounded hover:bg-red-800 flex items-center justify-center text-center'>Get started
        <div className='pt-1'>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" aria-hidden="true">
            <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>

        </div>
      </button>

    </div>
  </div>  )
}
