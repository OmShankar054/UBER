import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
 

const UserProtectWrapper = ({ 
    children
 }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

     useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper