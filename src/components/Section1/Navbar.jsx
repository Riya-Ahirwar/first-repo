import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-12'>
        <h4 className='bg-blue-950 text-white px-4 py-3 rounded-full uppercase'>
            Target Audience
        </h4>
        <button className='bg-gray-200  rounded-3xl px-3 py-2 tracking-wider text-sm'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar