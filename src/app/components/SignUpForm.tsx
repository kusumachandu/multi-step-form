"use client"

import { FC } from 'react'
import { useForm } from 'react-hook-form';


const SignUpForm: FC = ({}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return <form className='p-2' onSubmit={handleSubmit(onSubmit)}>
    <div className='flex flex-col gap-1'>
      <label htmlFor="username">Username</label>
      <input 
        className='rounded-md h-12 px-2 focus:outline-none text-slate-900'
        id="username"
        type='text'
        placeholder='username'
        {...register('username')}
      />
    </div>
    <div className='flex flex-col gap-1 pt-4'>
      <label htmlFor="username">Email</label>
      <input 
        className='rounded-md h-12 px-2 focus:outline-none text-slate-900'
        id="email"
        type='text'
        placeholder='email'
        {...register('email')}
      />
    </div>
    <div className='flex flex-col gap-1 pt-4'>
      <label htmlFor="username">Password</label>
      <input 
        className='rounded-md h-12 px-2 focus:outline-none text-slate-900'
        id="password"
        type='text'
        placeholder='password'
        {...register('password')}
      />
    </div>
    <div className='gap-1 pt-4 flex justify-end'>
      <button type='submit' placeholder='Next' className='border font-semibold rounded-md py-2 px-4 bg-black text-white'>Next</button>
    </div>
  </form>
}

export default SignUpForm