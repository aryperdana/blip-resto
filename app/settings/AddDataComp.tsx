'use client'
import React, { useState } from 'react'
import { Data } from '../data/data'
import iconAdd from '../../public/image/iconAdd.svg'
import Image from 'next/image'


interface ModalProps {
    isOpen: boolean;
    onClose: (isOpen: boolean) => void;
    addData: (newData: Data) => void;
}

const AddDataComp:React.FC<ModalProps> = ({ isOpen, onClose, addData }) => {
    const [formData, setFormData] = useState<Data>({
        id: 0,
        title: '',
        price: 0,
        qty: 0,
        image: ''
      });

      
    const closeModal = () => {
        onClose(false);
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
   
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'id' ? Number(value) : value,
        }));
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setFormData(prevData => ({
              ...prevData,
              image: reader.result as string,
            }));
          };
          reader.readAsDataURL(file);
        }
      };

    console.log(formData);
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addData(formData);
        // Reset the form after submission if needed
        setFormData({
          id: 0,
          title: '',
          price: 0,
          qty: 0,
          image: ''
        });

        closeModal()
      };
    

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50" onClick={closeModal}></div>
      )}
      <div className={`fixed right-0 top-0 bottom-0 w-1/3 rounded-md bg-sideColor shadow-lg z-50 transition-transform duration-300 transform overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">Add New Dish</h3>
          <div className='flex gap-2 my-4'>
            <button className='border border-gray-700 p-2 rounded-lg text-custom-yellow-100'>Hot Dishes</button>
            <button className='border border-gray-700 p-2 rounded-lg text-custom-yellow-100'>Cold Dishes</button>
            <button className='border border-gray-700 p-2 rounded-lg text-custom-yellow-100'>Soup</button>
            <button className='border border-gray-700 p-2 rounded-lg text-custom-yellow-100'>Grill</button>
          </div>
        </div>
        <div className='w-full border border-b-1 border-gray-700 my-4'></div>
        <div className='mx-5'>
            <form onSubmit={handleSubmit}>
                {/* <input className='w-full h-[133px] border border-dashed rounded-lg border-custom-yellow-100 bg-sideColor'>
          
                </input> */}
                <div className="relative">
                    <label htmlFor="fileInput" className="cursor-pointer bg-sideColor h-[133px] border border-dashed border-custom-yellow-100 px-4 py-2 rounded-lg flex flex-col items-center justify-center">
                        <Image src={iconAdd} alt="icon" className="mr-2" />
                        <div className='text-custom-yellow-100'>
                            Add Picture
                        </div>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        name='image'
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
                <div className='flex flex-col my-5 mx-2'>
                    <label className="mb-2">Product Name</label>
                    <input name='title' type='text' className='w-[297px] h-[48px] p-2 rounded-lg bg-mainColor focus:border-transparent outline-none' placeholder='click here...' onChange={handleChange} />
                </div>
                <div className='flex flex-col my-5 mx-2'>
                    <label className="mb-2">Price</label>
                    <input name='price' type='number' className='w-[297px] h-[48px] p-2 rounded-lg bg-mainColor focus:border-transparent outline-none' placeholder='click here...' onChange={handleChange} />
                </div>
                <div className='flex flex-col my-5 mx-2'>
                    <label className="mb-2">Stock</label>
                    <input name='qty' type='number' className='w-[174px] h-[48px] p-2 rounded-lg bg-mainColor focus:border-transparent outline-none' placeholder='click here...' onChange={handleChange} />
                </div>
                <div className='flex flex-col my-5 mx-2'>
                    <label className="mb-2">Item</label>
                    <input name='item' type='text' className='w-[174px] h-[48px] p-2 rounded-lg bg-mainColor focus:border-transparent outline-none' placeholder='click here...' onChange={handleChange} />
                </div>
                <button type='submit' className='w-full h-[48px] bg-custom-yellow-100 rounded-lg mx-2 mb-8'>Save</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default AddDataComp