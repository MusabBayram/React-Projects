import React from 'react'

function UserBox() {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
        <img src= 'https://randomuser.me/api/portraits/men/3.jpg' alt='Profile' 
        className='w-11 h-11 rounded-full'/>
        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>
                Musab Bayram...
            </span>
            <span className='text-sm text-gray-dark'>
                @MusabBayram
            </span>
        </div>

        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-700 rounded-full' />
            <div className='w-1 h-1 bg-gray-700 rounded-full' />
            <div className='w-1 h-1 bg-gray-700 rounded-full' />
        </div>
    </div>
  )
}

export default UserBox