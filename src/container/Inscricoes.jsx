import React from 'react'

import { subscribeInstructions } from '../constants'

function Inscricoes() {
  return (
    <div className='w-100 bg-nord6 pt-20'>

    <div className='max-w-6xl mx-auto'>
      <div className='mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold'>
        <h2>Inscrições</h2>
        </div>
    
    <div className='w-100 flex justify-center mb-10 mt-8'>
      <h3 className=' text-nord1 text-2xl font-bold'>Como se inscrever</h3>
    </div>

    <div className='subcription-grid  text-nord0 grid  grid-flow-col '>
        {subscribeInstructions.map((instruction, index) => (
          <div
            className={`flex items-start p-6 max-w-xl gap-4  ${index === 1 ? '' : ''}`}
            key={index}
          >
            <h2 className='mt-1 px-6 py-4 font-bold text-2xl text-white bg-nord0'>{index + 1}</h2>
            <div>
              <h2 className=' text-lg mb-8'>{instruction.title}</h2>
              {
                typeof(instruction.text) === 'string' 
                ? <p className='text-lg'>{instruction.text}</p>
                : instruction.text.map((text, index) => (
                  <p className='text-lg' key={index}>{text}</p>
                ))
              }
              
            </div>
          </div>
        ))}
    </div>
  </div>
        </div>
  )
}

export default Inscricoes