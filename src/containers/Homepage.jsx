import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { LoginPage } from '../components/LoginPage'

export const Homepage = () => {
  return (
    <>
    <div className='relative flex flex-col w-full container mx-auto mt-4'>
        <LoginPage />
        <Carousel />
    </div>
    <Outlet />
    </>
    
  )
}
