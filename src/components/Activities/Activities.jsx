import React from 'react'
import tableBg from '../../images/tableBg.png'
import {tableData} from './tableData'

const Activities = () => {

    return (
        <div>
            <div className="flex justify-between p-10">
                <div>
                    <h1 className='text-2xl font-semibold'>Last Month Activities</h1>
                    <p className='text-[#9B9B9B] text-xs'>Monthly Activities</p>
                </div>
                <h1 className='text-base font-semibold'>View All</h1>
            </div>
            <div className='border-b border-black border-opacity-20 w-full md:w-[95%] md:ml-10'></div>
            <div
            className="overflow-x-auto"
            >
                <table className="table-auto min-w-full divide-y ">
                    <thead>
                        <tr className=''>
                            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Categories Names</th>
                            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Transactions</th>
                            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Date</th>
                            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {tableData.map((item, index) => (
                            <tr key={index} className="border-none">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className='flex'>
                                        <img src={item.logo} className='w-8 mr-6' alt="" />
                                        {item.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#22D03E]">{item.transaction}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.Date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.Amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Activities