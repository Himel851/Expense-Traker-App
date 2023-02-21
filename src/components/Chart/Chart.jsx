import React from 'react'
import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    Cell,
    ResponsiveContainer
} from 'recharts'
import logo1 from '../../images/categoryIcon-1.png'
import logo2 from '../../images/categoryIcon-2.png'
import logo3 from '../../images/categoryIcon-3.png'

const Chart = () => {
    const colors = ['#FD4438', '#452F02', '#4807EA', '#FD4438', '#4807EA', '#452F02', '#FD4438',];
    const data = [
        { name: "Mo", value: 27, color: "black" },
        { name: "Tu", value: 35, color: "red" },
        { name: "We", value: 30, color: "yellow" },
        { name: "Th", value: 27, color: "yellow" },
        { name: "Fr", value: 30, color: "yellow" },
        { name: "Sa", value: 35, color: "yellow" },
        { name: "Su", value: 20, color: "yellow" },
    ]
    return (
        <div>
            <div className='p-2 md:p-10 flex gap-24 border-b border-black border-opacity-20'>
                <div className='mt-10 md:mt-0'>
                    <h1 className='text-lg leading-8 font-semibold'>This Week Spend</h1>
                    <div className='flex gap-2 py-4'>
                        <img src={logo2} alt="" />
                        <img src={logo1} alt="" />
                        <img src={logo3} alt="" />
                    </div>
                </div>
                <div className='w-36 h-24 bg-white p-4 rounded-2xl mt-10 md:mt-0 ml-[-20%] md:ml-0'>
                    <h1 className='text-4xl text-center font-bold'>$540</h1>
                    <p className='text-center text-xs py-2'>Total Spend</p>
                </div>
            </div>

            <ResponsiveContainer width="80%" height="51%" className='mt-4'>
                <BarChart width={400} height={200} data={data} barGap={100} barCategoryGap={10}>
                    <XAxis axisLine={false} tickLine={false} dataKey="name" />
                    <YAxis type="number" ticks={[0, 10, 20, 30, 40]} axisLine={false} tickLine={false} dataKey="value" />
                    <Bar dataKey="value" fill="red" radius={[10, 10, 10, 10]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>



        </div>
    )
}

export default Chart