import { Button } from '@/components/ui/button'
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center p-6 h-screen w-full'>
      <div className='h-1/2 w-1/2 bg-slate-100 rounded-[30px] p-6 flex flex-col gap-4 item-center justify-center '>
        <span className='font-bold text-2xl'>Log In to acces library management dashboard</span>
        <div className='flex flex-col gap-4 '>
          <input className='outline-none p-2 bg-white rounded-md' type="text" placeholder='Enter Username'/>
          <input className='outline-none p-2  bg-white rounded-md' type="password" placeholder='Enter Password'/>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Login