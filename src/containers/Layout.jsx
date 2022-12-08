import React from 'react'
import { IconNotebook, IconUserCircle } from '@tabler/icons'
import { Outlet } from 'react-router-dom'
import { ProfileName } from '../components/ProfileName'

export const Layout = () => {
  return (
    <>
    <div className='flex flex-row justify-between items-center mt-10 shadow-xl rounded-xl'>
        <IconNotebook size={20} />
        <div className='flex flex-row gap-5 items-center'>
            <IconUserCircle size={40} />
            <ProfileName />
        </div>
    </div>
    <Outlet />
    </>
  )
}
