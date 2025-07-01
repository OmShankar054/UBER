import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'  // Importing Link component for navigation
import axios from 'axios'  // Importing axios for making HTTP requests
import {UserDataContext} from '../context/UserContext'  // Importing user context for managing user state

const UserSignup = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userData, setUserData] = useState({});  // State to hold user data

	const navigate = useNavigate();  // Hook to programmatically navigate
	
	const { user, setUser} = React.useContext(UserDataContext)  // Using user context to get and set user data

  const submitHandler =  async (e) => {  // Function to handle form submission

	e.preventDefault();  // Prevent default form submission behavior
	 const newUser = {  // Set user data state with form values
		fullname:{
			firstname: firstName,
			lastname: lastName
		},
		email: email,	
		password: password
	};

	const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)  // Sending POST request to server
	
	if (response.status === 201) {  // If response is successful
     const data = response.data;  // Get data from response
	   setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


	 
	 
	setEmail('');  // Reset email field
	setFirstName('');  // Reset first name field
	setLastName('');  // Reset last name field
	setPassword('');  // Reset password field
  };

  return ( // JSX structure for the signup page
 	<div className='p-7 h-screen flex flex-col justify-between' >
		  <div>
			  <img className='w-14 mb-8 ' src='https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw'/>

		   <form onSubmit={(e)=>{  // Handling form submission
		  	  submitHandler(e)  // Call the submit handler
		    	}}>

		  	<h3 className='text-lg font-base mb-2'>Write your Name </h3> 
        <div className='flex gap-4 mb-7'>
			  <input
			  required 
			  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
			  type="text" 
			  placeholder='First Name'
			  value={firstName}
			  onChange={(e) => setFirstName(e.target.value)} // Updating state on input change
		  	/>

		  	<input
			  required
			  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
			  type="text"
			  placeholder='Last Name'
			   value={lastName}
			  onChange={(e) => setLastName(e.target.value)}
		  	/>
      </div>

			<h3 className='text-lg font-medium mb-2'>Write your Email</h3>
			<input
			 required

			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
			 type="email"
			 placeholder='your email'
			 value={email}
			 onChange={(e) => setEmail(e.target.value)}
			/>

			<h3 className='text-lg font-medium mb-2'>Write your password</h3>
			<input
			 required

			 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
			 type="password"
			 placeholder='your password'
			 value={password}
			 onChange={(e) => setPassword(e.target.value)}
			/>

			<button className='bg-[#111] text-white font-semibold mb-3 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Create Account</button>
		 </form>

		 <p className='text-center'> Already have an account? <Link to='/login' className='text-blue-700'>Login here </Link> </p>
		</div>


		<div className='text-[10px] leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</div>

		 {/* <div>
			<Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as captain </Link>
		</div> */}
	</div>
  
  )
}

export default UserSignup