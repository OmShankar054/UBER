import React from 'react'
import { Link } from 'react-router-dom'  // Importing Link component for navigation

const UserSignup = () => {
  const submitHandler = (e) => {
	e.preventDefault();
	// Add your signup logic here
  };

  return (
	   <div className='p-7 h-screen flex flex-col justify-between' >
		  <div>
			  <img className='w-14 mb-8 ' src='https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw'/>

		   <form onSubmit={(e)=>{
		  	  submitHandler(e)
		    	}}>

		  	<h3 className='text-lg font-base mb-2'>Write your Name </h3>
        <div className='flex gap-4 mb-7'>
			  <input
			  required 
			  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
			  type="text" 
			  placeholder='First Name'
		  	/>

		  	<input
			  required
			  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
			  type="text"
			  placeholder='Last Name'
		  	/>
      </div>

			<h3 className='text-lg font-medium mb-2'>Write your Email</h3>
			<input
			 required

			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
			 type="email"
			 placeholder='your email'
			/>

			<h3 className='text-lg font-medium mb-2'>Write your password</h3>
			<input
			 required

			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
			 type="password"
			 placeholder='your password'
			/>

			<button className='bg-[#111] text-white font-semibold mb-3 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Login</button>
		 </form>

		 <p className='text-center'> New Here?<Link to='/signup' className='text-blue-700'>Create new account</Link> </p>
		</div>

		<div>
			<Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as captain </Link>
		</div>
	</div>
  
  )
}

export default UserSignup