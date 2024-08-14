import React from 'react'
import Image from 'next/image'
import logo from './Images/logo.png'

const Navbar = () => {
  return (
    <div className='flex px-[10rem] py-10 items-center justify-between'>
      <div>
        <Image className='w-32' src={logo} width={0} height={0}/>
      </div>

        <ul className='flex items-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Rooms</li>
            <li>Blog</li>
            <li>Shop</li>
        </ul>

      <div className='flex items-center gap-5'>
        <button>Book Now</button>
        <div>
            <p></p>
            <p>0</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar
