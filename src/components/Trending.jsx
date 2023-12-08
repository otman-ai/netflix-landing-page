import React, { useState, useEffect, useRef } from 'react';
import { Title } from './Title';
import { Selects } from './Selects';
import { trending_now, trend_places, trend_types, trending_movies } from '../constants';
export const Trending = () => {
  const [Place, setPlace] = useState(trend_places[0]);
  const [Types, setTypes] = useState(trend_types[0]);
  const [Type, setType] = useState(trend_types[0][0]);
  const scrollContainer = useRef(null);
  useEffect(() => {
    console.log(Place);
    console.log(trending_now);
    setTypes(trending_now[0]['Places'][Place]['type']);
  }, [Place])

  const scrollToStart = () => {
    scrollContainer.current.scroll({
      left: 0,
      behavior: 'smooth'
    });
  }
  const scrollToEnd = () => {
    scrollContainer.current.scroll({
      left: scrollContainer.current.scrollWidth,
      behavior: 'smooth'
    });
  }
  return (
    <div className='space-y-6 '>
      <Title title="Trending now" />
      <div className='lg:flex lg:space-x-3 space-y-3 lg:space-y-0 pr-4'>
        <Selects id="place" selectedValue={Place} setSelectedValue={setPlace} values={trend_places} />
        <Selects id="type" selectedValue={Type} setSelectedValue={setType} values={Types} />

      </div>
      <div className='flex h-fit'>
        <button className='pr-3' onClick={scrollToStart}>
          <div className='bg-gray-900 hover:bg-gray-700 w-fit px-1 py-9  mt-16 mb-16 rounded-xl items-center justify-center flex'>
            <svg className="items-center h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronLeft" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="gray"></path></svg>        </div>
        </button>
        <ul ref={scrollContainer} className='snap-x snap-mandatory flex space-x-5  overflow-x-auto pt-2 p-3 w-11/12  hide-scrollbar '>
          {trending_movies.map((item) => (
            <li className='snap-center shrink-0 cursor-pointer transition transform hover:scale-105 relative'>
              <div className='pl-6 w-48 h-70'>
                <img
                  className='rounded-lg'
                  src={item.src} />
              </div>
              <h1 className='text-stroke-1 absolute  text-black font-extrabold bottom-6  text-8xl  '>{item.id}</h1>
            </li>
          ))}

        </ul>

        <button className='pl-3' onClick={scrollToEnd}>
          <div className='bg-gray-900 hover:bg-gray-700  w-fit px-1 py-9  mt-16 mb-16 rounded-xl items-center justify-center flex'>
            <svg className="items-center h-full" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="gray"></path></svg>
          </div>
        </button>
      </div>


    </div>
  )
}
