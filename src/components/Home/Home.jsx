import React from 'react'
import Categories from '../Categories/Categories'
import Expense from '../Expense/Expense'
import Chart from '../Chart/Chart'
import Navbar from '../Navbar/Navbar'
import Activities from '../Activities/Activities'

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 ">
            <div className='flex md:col-span-3'>
                <Navbar />
                <Expense />
            </div>
            <div className='md:col-span-9 bg-[#f5f5f5e6] w-full'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2  md:gap-56'>
                        <Chart />
                        <Categories />
                    </div>
                    <div>
                        <Activities />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home