import React from 'react'

const Rightcard = () => {
  return (
    <div className='w-80 h-full rounded-3xl overflow-hidden relative'>
      <img
        className='w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60'
        alt=''
      />

      {/* Overlay content */}
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between text-white'>
        
        {/* Top circle number */}
        <h2 className='bg-white/80 text-black rounded-full text-2xl font-bold h-12 w-12 flex justify-center items-center'>
          1
        </h2>

        {/* Bottom content */}
        <div className='space-y-4'>
          <p className='text-lg leading-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta natus odio quae saepe quibusdam.
          </p>

          {/* Buttons row */}
          <div className='flex items-center gap-4'>
            
            <button className='text-white bg-black px-8 py-3 rounded-full font-medium'>
              Satisfied
            </button>

            <button className='text-white bg-black px-4 py-3 rounded-full font-medium flex items-center justify-center'>
              <i className="ri-arrow-right-line text-xl"></i>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Rightcard
