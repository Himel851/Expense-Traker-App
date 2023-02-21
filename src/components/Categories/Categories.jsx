import React from 'react'
import cat1 from '../../images/Group1.png'
import logo from '../../images/Ellipse 1.png'
import arrow from '../../images/Arrow.png'

import { CatData } from './CatData'

const Categories = () => {
  return (
    <div>
      <div className='text-right mt-6'>
        <button className="inline-block bg-[#FFC248] hover:bg-[#de9c18eb] w-44 text-white font-bold py-2 px-4 rounded-2xl">
          + Add Expense
        </button>
        <img src={logo} alt="" className='inline-block w-12 ml-2 mr-2 md:ml-8 md:mr-8 ' />
        <img src={arrow} className='inline-block mr-8 md:mr-0' />

      </div>
      <div className='bg-white w-[100%] md:w-[90%] h-[80%] p-6  rounded-xl mt-8 '>
        <h1 className='border-b border-black border-opacity-20 p-4 text-lg font-semibold'>Categories</h1>

        <div className='grid grid-cols-3 gap-6 mt-4'>
          {
            CatData.map((item) => (
              <div className='py-2 bg-[#F4F4F4] w-24 h-20 rounded-xl'  >
                <img src={item.logo} alt="" className='w-10 ml-[30%]' />
                <h1 className='text-center text-xs'>{item.name}</h1>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Categories