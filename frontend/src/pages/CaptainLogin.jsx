import React from 'react'  
import { useState } from 'react'
import { Link } from 'react-router-dom'  // Importing Link component for navigation  
import { CaptainDataContext } from '../context/CaptainContext'; // Importing context for managing captain data
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation	
import axios from 'axios'; // Importing axios for making HTTP requests   

const CaptainLogin = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const { captain, setCaptain } = React.useContext(CaptainDataContext); // Using context to manage captain data, details of the captain are stored in the context
   // This allows us to access and update the captain's data throughout the application

   const navigate = useNavigate(); // Hook to programmatically navigate

    const submitHandler= async (e)=>{  // handle form submission
      e.preventDefault()   // prevent default form submission behavior
      const captain = {  
       email:email,
       password
      }

	  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)  //  Sending POST request to server with captain's credentials
	  if (response.status === 200) {  // If response is successful	
		  const data = response.data;  // Get data from response
		  setCaptain(data.captain)  // Update captain state with received data
		  localStorage.setItem('token', data.token)  // Store token in local storage
		  navigate('/captain-home')  // Navigate to captain home page

      //console.log(captain)
	  setEmail('')          // reset email input field
	  setPassword('')       // reset password input field
	}
  }
  
  return (
	<div className='p-7 h-screen flex flex-col justify-between' >
		<div>
			<img className='w-14 mb-8 ' src=' https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw'/>

		 <form onSubmit={(e)=>{
			submitHandler(e)
			}}>
			<h3 className='text-lg font-medium mb-2'>Write your email</h3>

			<input
			 required 
			 value={email} 
			 onChange={(e) => {
			 setEmail(e.target.value)
			 } } 
			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
			 type="email" 
			 placeholder='your email@example.com'
			/>

			<h3 className='text-lg font-medium mb-2'>Write your password</h3>

			<input 
			 required 
			 value={password} 
			 onChange={(e) => {
			 setPassword(e.target.value)
			 }} 
			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
			 type="password" 
			 placeholder='your password'
			 autoComplete="current-password"
			/>

			<button className='bg-[#111] text-white font-semibold mb-3 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Login</button>
		 </form>

		 <p className='text-center'> Join us!!<Link to='/captain-signup' className='text-blue-700'> Register as a captain </Link> </p>
		</div>

		<div>     {/* This section contains the button to redirect to User Login page */}
			<Link to='/login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as User </Link>  
      {/* This button redirects to the User Login page */}
		</div>
	</div>
  )
}

export default CaptainLogin