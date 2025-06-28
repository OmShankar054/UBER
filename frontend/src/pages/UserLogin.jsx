import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userData, setUserData] = useState({})

	

	const submitHandler= (e)=>{
		e.preventDefault()
		setUserData({
		 email:email,
		 password:password
		})
		console.log(userData)
		setEmail('')
		setPassword('')
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

		 <p className='text-center'> New Here?<Link to='/signup' className='text-blue-700'>Create new account</Link> </p>
		</div>

		<div>
			<button className='bg-[#10b461] text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as captain </button>
		</div>
	</div>
  );
};

export default UserLogin;