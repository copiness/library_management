import React from 'react'

const TopBooks = () => {
  return (
    <div className='flex justify-evenly gap-4 mt-4 '>
      <div className='h-[170px] w-[150px] bg-white rounded-lg'><img src="/topten.webp" className='h-full w-full rounded-xl' alt="" /></div>
      <div className='h-[170px] w-[150px] bg-white rounded-lg '><img src="/topten.webp" className='h-full w-full rounded-xl'alt="" /></div>
      <div className='h-[170px] w-[150px] bg-white rounded-lg '><img src="/topten.webp" className='h-full w-full rounded-xl'alt="" /></div>
      <div className='h-[170px] w-[150px] bg-white rounded-lg '><img src="/topten.webp" className='h-full w-full rounded-xl' alt="" /></div>
      <div className='h-[170px] w-[150px] bg-white rounded-lg '><img src="/topten.webp" className='h-full w-full rounded-xl' alt="" /></div>
    </div>
  )
}

export default TopBooks