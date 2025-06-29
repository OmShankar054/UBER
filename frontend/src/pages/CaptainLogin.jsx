import React from 'react'  
import { useState } from 'react'
import { Link } from 'react-router-dom'  // Importing Link component for navigation     

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})



    const submitHandler= (e)=>{  // handle form submission
      e.preventDefault()   // prevent default form submission behavior
      setCaptainData({  
       email:email,
       password:password
      })
      console.log(captainData)
      setEmail('')          // reset email input field
      setPassword('')       // reset password input field
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