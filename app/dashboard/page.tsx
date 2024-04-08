'use client'

import React, { FC, useState } from "react";
import SidebarComp from "../components/SidebarComp";
import { format } from 'date-fns';
import Image from "next/image";
import iconDolar from '../../public/image/iconDolar.svg'
import iconDish from '../../public/image/iconDish.svg'
import iconPeople from '../../public/image/iconPeople.svg'
import iconArrowUp from '../../public/image/iconArrowUp.svg'
import iconArrowDown from '../../public/image/iconArrowDown.svg'
import iconFilter from '../../public/image/iconFilter.svg'
import iconDown from '../../public/image/iconDown.svg'
import chart from '../../public/image/chart.svg'
import { getAllData, getAllDataCustomer } from '../data/data'


interface CardTotalProps {
    icon: string;
    iconArrow: string;
    title: string;
    text: string;
    percent: string;
    isUp : boolean;
}

const CardTotal:FC<CardTotalProps> = ({ icon, iconArrow, title, text, percent, isUp }) => {
  return (
    <div className="w-[280px] h-[160px] bg-sideColor rounded-md p-3">
        <div className="flex gap-4 items-center">
            <Image src={icon} alt="iconDolar" />
            <div className="flex gap-2">
                <div className={isUp ? "text-[#50D1AA]" : "text-[#FF7CA3]"}>{percent}</div>
                <Image width={20} height={20} src={iconArrow} alt="iconArrowUp" />
            </div>
        </div>
        <div className="text-4xl my-4">{title}</div>
        <div className="text-gray-500">{text}</div>
    </div>
  )
}

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const date = new Date();

    const formattedDate = format(date, 'EEEE, d MMM yyyy');

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="flex">
      <SidebarComp menu="dashboard"/>
      <div className="w-[65rem] mx-5 mt-4">
        <div className="my-4">
            <div className="font-semibold text-2xl">
               Dashboard
            </div>
            <div className="text-gray-500 text-sm">
              { formattedDate }
            </div>
        </div>
        <div className='w-full border border-b-1 border-gray-700 my-4'></div>

        <div className="flex justify-between p-0">
            <CardTotal isUp={true} icon={iconDolar} percent="+32.40%" iconArrow={iconArrowUp} title="Rp.151.248.138" text="Total Revenue" />
            <CardTotal isUp={false} icon={iconDish} percent="-12.40%" iconArrow={iconArrowDown} title="23,456" text="Total Dish Ordered" />
            <CardTotal isUp={true} icon={iconPeople} percent="+2.40%" iconArrow={iconArrowUp} title="1,234" text="Total Customer" />
        </div>

            <div className="bg-sideColor w-full my-4 py-4">
                <div className="flex justify-between p-5">
                    <div className="text-lg">Order Report</div>
                    <div>
                        <button className='flex gap-2 text-center items-center py-2 px-2 border border-spacing-9 border-gray-600 rounded-md'><Image src={iconFilter} alt='iconFIlter' />Filter Order</button>
                    </div>
                </div>
                <table className="divide-y divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-4 text-left text-sm">
                                Customer
                            </th>
                            <th className="px-6 py-4 text-left text-sm">
                                Menu
                            </th>
                            <th className="px-6 py-4 text-left text-sm">
                                Total Payment
                            </th>
                            <th className="px-6 py-4 text-left text-sm">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllDataCustomer()?.map(val => 
                             <tr className="whitespace-nowrap">
                             <td className="px-6 py-4 text-sm text-gray-500">
                                 {val?.name}
                             </td>
                             <td className="px-6 py-4">
                                 <div className="text-sm text-gray-500">
                                 {val?.menu}
                                 </div>
                             </td>
                             <td className="px-6 py-4">
                                 <div className="text-sm text-gray-500">{val?.payment}</div>
                             </td>
                             <td className="px-6 py-4 text-sm">
                                {val?.status === 'completed' && <button className="w-full bg-[#6BE2BE] text-[#50D1AA] bg-opacity-25 text-center rounded-xl py-1">Completed</button>}
                                {val?.status === 'preparing' && <button className="w-full bg-[#9290FE33] text-[#9290FE] bg-opacity-25 text-center rounded-xl py-1">Preparing</button>}
                                {val?.status === 'pending' && <button className="w-full bg-[#FFB57233] text-[#FFB572] bg-opacity-25 text-center rounded-xl py-1">Pending</button>}                           
                             </td>
                         </tr>  
                        )}
                    </tbody>
                </table>
            </div>
      </div>
      <div className="w-[25rem] mt-6 mx-4">
        <div className={`w-full ${isOpen ? 'h-fit' : 'h-[426px]'} bg-sideColor rounded-lg p-4 transition-all duration-300`}>
            <div className="flex justify-between">
                <div className="text-lg">
                    Most Ordered
                </div>
                <div>
                    <button className='flex gap-2 text-center items-center py-2 px-2 border border-spacing-9 border-gray-600 rounded-md'><Image src={iconDown} alt='icon' />Today</button>
                </div>
            </div>
            <div className='w-full border border-b-1 border-gray-700 my-4'></div>

            {isOpen ? getAllData().map(val =>
                <div className="flex items-center gap-4 my-6">
                    <Image src={val?.image} alt="image" width='53' height='53' />
                    <div>
                        <div>
                            {val?.title}
                        </div>
                        <div className="text-gray-500">
                            {val?.qty} dishes ordered
                        </div>
                    </div>
                </div>
            ) : getAllData().slice(0, 3).map(val =>
                <div className="flex items-center gap-4 my-6">
                    <Image src={val?.image} alt="image" width='53' height='53' />
                    <div>
                        <div>
                            {val?.title}
                        </div>
                        <div className="text-gray-500">
                            {val?.qty} dishes ordered
                        </div>
                    </div>
                </div>
            )}
            {isOpen ? 
                <button className="border border-[#EA7C69] text-[#EA7C69] w-full py-4 rounded-lg" onClick={toggleDrawer}>
                    Hide
                </button>
                :
                <button className="border border-custom-yellow-100 text-custom-yellow-100 w-full py-4 rounded-lg" onClick={toggleDrawer}>
                    View All
                </button>
            }
        </div>
        {!isOpen && (
            <div className="w-full h-[333px] my-4 bg-sideColor rounded-lg p-4">
                <div className="flex justify-between">
                    <div className="text-lg">
                        Most Ordered
                    </div>
                    <div>
                        <button className='flex gap-2 text-center items-center py-2 px-2 border border-spacing-9 border-gray-600 rounded-md'><Image src={iconDown} alt='icon' />Today</button>
                    </div>
                </div>
                <div className='w-full border border-b-1 border-gray-700 my-4'></div>
                <div className="flex gap-6">
                    <Image src={chart} alt="chart" />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 my-2">
                            <div className="h-5 w-5 bg-[#FFCF00] rounded-full"></div>
                            <div>
                                <div>
                                    Dine In
                                </div>
                                <div className="text-gray-500 text-sm text-nowrap">
                                    200 Customer
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 my-2">
                            <div className="h-5 w-5 bg-[#FFA900] rounded-full"></div>
                            <div>
                                <div>
                                    To Go
                                </div>
                                <div className="text-gray-500 text-sm text-nowrap">
                                    122 Customer
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 my-2">
                            <div className="h-5 w-5 bg-[#DF8109] rounded-full"></div>
                            <div>
                                <div>
                                    Delivery
                                </div>
                                <div className="text-gray-500 text-sm text-nowrap">
                                    264 Customer
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}
      </div>
    </div>
  );
}
