import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Importing axios for making HTTP requests

const UserLogin = () => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userData, setUserData] = useState({})

	const { user, setUser } = useContext(UserDataContext)  // Using user context to get and set user data
	const navigate = useNavigate();

	const submitHandler= async (e)=>{  // handle form submission
		e.preventDefault()   // prevent default form submission behavior

		const userData = {
			email: email,
			password: password
		}

		const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)  // Sending POST request to server
		if (response.status === 200) {  // If response is successful
			const data = response.data;  // Get data from response
			setUser(data.user)
			localStorage.setItem('token', data.token)
			 console.log("Navigating to home..."); 
			navigate('/home')
		}	

		console.log(userData)
		setEmail('')          // reset email input field
		setPassword('')       // reset password input field
	}


  return (
	<div className='p-7 h-screen flex flex-col justify-between' >
		<div>
			<img className='w-14 mb-8 ' src='https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw'/>

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
			 autoComplete="email"
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

		 <p className='text-center'> New Here?<Link to='/signup' className='text-blue-700'>Create new account</Link> </p>
		</div>

		<div>
			<Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as captain </Link>
		</div>
	</div>
  );
};

export default UserLogin;