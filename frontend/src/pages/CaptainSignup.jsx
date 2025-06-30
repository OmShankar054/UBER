import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainSignup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({}); // State to hold user data

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });

    console.log(userData); // Log user data to console (for debugging)

    setEmail(''); // Reset email field
    setFirstName(''); // Reset first name field
    setLastName(''); // Reset last name field
    setPassword(''); // Reset password field
  };
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-14 mb-8 ' src=' https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw'/>

        <form onSubmit={(e) => {
          submitHandler(e); // Call the submit handler
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
              onChange={(e) => setLastName(e.target.value)} />
          </div>

          <h3 className='text-lg font-medium mb-2'>Write your Email</h3>
          <input
            required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <h3 className='text-lg font-medium mb-2'>Write your password</h3>
          <input
            required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Login</button>
        </form>

        <p className='text-center'> Already have an account? <Link to='/captain-login' className='text-blue-700'>Login here </Link> </p>
      </div>


      <div className='text-[10px] leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</div>

      {/* <div>
               <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Sign in as captain </Link>
           </div> */}
    </div>

  );
}

export default CaptainSignup;