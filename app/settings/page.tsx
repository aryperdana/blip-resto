'use client'
import React, { FC } from 'react'
import SidebarComp from '../components/SidebarComp';
import Tabs from '../components/Tabs';
import iconFilter from '../../public/image/iconFilter.svg'
import Image from 'next/image';
import Content from './Content';
import { getAllData } from '../data/data'


const Settings: FC = () => {
    
    const tabsData = [
        {
          title: 'Hot Dishes',
          content: <Content datas={getAllData()} />,
        },
        {
          title: 'Cold Dishes',
          content: <Content datas={getAllData()} />,
        },
        {
          title: 'Soup',
          content: <Content datas={getAllData()} />,
        },
        {
          title: 'Grill',
          content: <Content datas={getAllData()} />,
        },
        {
          title: 'Appetizer',
          content: <Content datas={getAllData()} />,
        },
        {
          title: 'Dessert',
          content: <Content datas={getAllData()} />,
        },
      ];
  
    return (
      <div className="flex">
        <SidebarComp menu='settings' />
        <div className="w-full mx-16 mt-4">
          <div className="grid grid-flow-col justify-stretch my-4">
            <div className="font-semibold text-2xl">
                Settings
            </div>
            <div>
                <button className='flex gap-2 text-center items-center py-2 px-2 border border-spacing-9 border-gray-600 rounded-md'><Image src={iconFilter} alt='iconFIlter' />Manage Categories</button>
            </div>
          </div>
          <div className='bg-sideColor px-8 py-8 rounded-lg'>
            <Tabs tabs={tabsData} />
            <div className='min-w-full min-h-full border border-b-1 border-gray-700 my-6'></div>
          </div>
        </div>
      </div>
    );
}

export default Settings