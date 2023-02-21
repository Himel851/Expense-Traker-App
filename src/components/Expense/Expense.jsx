import React from 'react'
import group1 from '../../images/Group1.png'
import group2 from '../../images/Group2.png'
import decoration from '../../images/Decoration.png'
import wallet from '../../images/Wallet.png'

const Expense = () => {
  return (
    <div className='h-[110vh] bg-[#ecc67a] bg-opacity-20 w-full border-x-2 border-[#CECECE] p-2'>
      <div className="pt-8">
        <h1 className='text-xl leading-8 font-medium'>Kösten</h1>
        <p className='text-xs'>Expense Manager</p>
      </div>
      <div className='pt-10 flex' >
        <div className='bg-[#FFC248] h-40 w-[90%] rounded-2xl '>
          <h1 className='text-sm font-medium p-4'>CURRENT BALANCE</h1>
          <div className='flex p-2 gap-6 '>
            <img src={wallet} alt="" className='w-12' />
            <div>
              <h1 className='text-2xl font-bold'>$55,569</h1>
              <p className='text-xs font-semibold'>Total Expense</p>
            </div>
          </div>
        </div>
        <img src={decoration} alt="" className='ml-[-20%] h-40 rounded-2xl' />
      </div>

      <div className='pt-4'>
        <h1 className='text-base leading-5 font-normal text-[#EB001B]'>Latest Activity</h1>

        <div className='border-t  border-black border-opacity-20 mt-2'>
          <h1 className='text-center text-xs p-4'>Today</h1>
          <div className='flex gap-12 p-2 border-b border-black border-opacity-20'>
            <div className='flex gap-4'>
              <img src={group2} alt="" className='w-8' />
              <span className='text-xs'>Antivirus</span>
            </div>
            <div>
              <h1 className='text-[#EB001B] font-bold '>-$500</h1>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-12 p-2 '>
            <div className='flex gap-4'>
              <img src={group1} alt="" className='w-8' />
              <span className='text-xs'>Re-Filled</span>
            </div>
            <div>
              <h1 className='text-[#EB001B] font-bold '>-$200</h1>
            </div>
          </div>
          <div>
            <h1 className='text-center text-xs p-4'>Yesterday</h1>
            <div className='flex gap-12 p-2 border-b border-black border-opacity-20'>
              <div className='flex gap-4'>
                <img src={group2} alt="" className='w-8' />
                <span className='text-xs'>IP Cams</span>
              </div>
              <div>
                <h1 className='text-[#EB001B] font-bold '>-$300</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Expense