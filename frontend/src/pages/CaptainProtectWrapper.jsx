import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' // Importing axios for making HTTP requests
 

const CaptainProtectWrapper = ({ 
    children
 }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = React.useContext(CaptainDataContext); // Using context to manage captain data
    const [ isLoading, setIsLoading ] = useState(true)

   // console.log(token)
     useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

         axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`  // Sending token in the Authorization header
            }
        }).then(response => {
            if (response.status === 200) {  // If response is successful
                setCaptain(response.data.captain)  // Update captain state with received data
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [ token ])

     if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    // If the token is not present, redirect to the login page
        

    return (
        <>{children}</>
    )
}

export default CaptainProtectWrapper