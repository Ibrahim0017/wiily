import React from 'react'
import willy from '../assets/Group 346.png'

const Footer = () => {
  return (
    <>
    <div className='flex h-48 bg-[#DCFEFD] w-full gap-72 rounded-t-3xl
    '>
       <div className=' w-[10%] flex items-end'>
       <div className='w-24 flex items-end'>
            <img className='w-full' src={willy} alt="" />
        </div>
       </div>
        <div className='flex flex-col justify-start gap-5'>
            <h1 className='text-[30px]'>Official links</h1>
            <div className='flex gap-4'>
                <div className='w-7 h-7 bg-gray-500'></div>
                <div className='w-7 h-7 bg-gray-500'></div>
                <div className='w-7 h-7 bg-gray-500'></div>
                <div className='w-7 h-7 bg-gray-500'></div>
            </div>
            <h1>2024 oremadipisicing.</h1>
        </div>
    </div>
    </>
  )
}

export default Footer