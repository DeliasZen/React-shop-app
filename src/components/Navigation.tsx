import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-gray-700 items-center text-white'>
      <span className='font-bold text-3xl'>SHOP</span>

      <span className='font-bold'>
        <Link to="/React-shop-app" className='mr-2'>Products</Link>
        <Link to="/about">About</Link>
        </span>
    </nav>
  )
}