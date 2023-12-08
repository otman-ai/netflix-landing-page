import React, { useState } from 'react'
import { Title } from './Title';
import { faqs } from '../constants'
import { Close, Plus } from './Icons';



const FAQ = ({ id, question, answer, openQuestionId, onClick }) => {
  return (
    <div className='space-y-1 w-full pt-2' key={id}>
      <button className='bg-gray-800 w-full text-start p-6 hover:bg-gray-600 justify-between flex ' onClick={()=>onClick(id)}>
        <p className='pl-4 font-semibold text-xl text-white'>{question}</p>
        {openQuestionId ===id?(<Close/>):(<Plus/>)}
      </button>
        <div 
            className={`pl-4 transition-all duration-300 ease-in-out transform ${openQuestionId === id ? 'bg-gray-800 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
          >
            <p className={` font-semibold  text-start text-xl p-7 text-white ${openQuestionId === id ? '' : 'hidden'}`}>{answer}</p>
          </div>
    </div>
  );
}
export const FAQs = () => {
  const [openQuestionId, setOpenQeustionId] = useState('0');
  const onClick = (id) => {
    if (openQuestionId === id) {
      setOpenQeustionId(null);
    }
    else {
      setOpenQeustionId(String(id));
      console.log("id: ",id);
      console.log("question id :",openQuestionId);

    }
  }
  return (
    <div className='w-full pt-9'>
      <Title title='Frequently Asked Questions' />
      <div className='spacey-y-3 lg:w-11/12 pt-4 w-full'>
        {faqs.map(({id, question, answer}) => (
          <FAQ id={id} question={question} answer={answer} onClick={onClick} openQuestionId={openQuestionId} />
        ))}
      </div>
    </div>
  )
}
