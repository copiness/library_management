
import React from 'react'

const Card = ({logo,title,count}) => {
  return (
    <div className='flex flex-col justify-between h-32 w-full bg-white rounded-[20px] p-4'>
        <div className='flex justify-between items-center '>
            <span className='font-bold text-xl'>{count}</span>
            <div className='bg-orange-600 p-2 rounded-full text-white'>{logo}</div>
        </div>
        <div className=''>
            <span>{title}</span>
        </div>
    </div>
  ) 
}

export default Card