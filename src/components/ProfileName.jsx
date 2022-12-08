import React from 'react'
import { useState, useEffect } from 'react'

export const ProfileName = () => {
    const [loggedIn, setloggedIn] = useState(false)
    useEffect(() => {
        localStorage.getItem('token') ? setloggedIn(true) : setloggedIn(false)
    }, [])
  
    return (
        <div>{loggedIn ? "giriş yaptım aq" : "siktir lan"}</div>
  )
}
