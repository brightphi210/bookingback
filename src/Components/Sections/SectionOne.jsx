
'use client'

import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";

const SectionOne = () => {
  return (
    <div className='bgURL flex justify-center items-center'>

        <div className='text-center isolate h-fit z-40 text-white '>
            <h2 className='text-6xl font-semibold'>Welcome to Kinsley</h2>
            <p className='pt-5'>
                Deleniti nostrum laboriosam 
                praesentium quasi quam voluptate.
            </p>
            <div className='relative w-full mt-10'>
                <input type="text" 
                placeholder="Search . . ." 
                className=" input-bordered w-full p-4 rounded-full" />
                <button className='absolute top-2 right-3 bg-blue-700 text-white py-2 px-5 rounded-full'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SectionOne
