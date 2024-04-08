'use client'

import React, { FC, useState } from 'react'
import { Data } from '../data/data'
import Image from 'next/image'
import iconAdd from '../../public/image/iconAdd.svg'
import iconEdit from '../../public/image/iconEdit.svg'
import AddDataComp from './AddDataComp'
import { addData, getAllData } from '../data/data'

interface ContentProps {
    datas: Data[];
  }

const Content:FC<ContentProps> = ({ datas }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const convertToRupiah = (value: number): string => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        });
        return formatter.format(value);
    }

    const handleAddData = (newData: Data) => {
        addData(newData);
        console.log('cuy',getAllData());
    };
    
  return (
    <>
        <div className='flex flex-wrap gap-4'>
            <button
                className='flex flex-col items-center justify-center w-[221px] h-[299px] border-2 border-custom-yellow-100 border-dashed rounded-lg'
                onClick={toggleModal}
            >
                <Image src={iconAdd} alt='iconAdd' />
                <div className='text-custom-yellow-100'>Add New Dish</div>
            </button>
            {datas.map(val =>
                <div className='flex flex-col items-center w-[221px] h-[299px] border-2 border-gray-600 rounded-lg pt-5 gap-3'>
                    <Image src={val.image} alt='dataImg' width={127} height={127} />
                    <div className='w-[144px] text-center'>{val?.title}</div>
                    <div className='flex items-center justify-center gap-2 font-light text-[#ABBBC2]'>
                        <div>{convertToRupiah(val?.price)}</div>
                        <div className='w-[6px] h-[6px] bg-[#C4C4C4] rounded-full'></div>
                        <div>{`${val?.qty} Bowls`}</div>
                    </div>
                    <div className='flex justify-center items-center gap-2 h-full w-full bg-custom-yellow-200 rounded-b-md text-custom-yellow-100'><Image src={iconEdit} alt='iconEdit' /><div>Edit Dish</div></div>
                </div>
                )
            }
        </div>
        <AddDataComp isOpen={isOpen} onClose={setIsOpen} addData={handleAddData} />
    </>
  )
}

export default Content