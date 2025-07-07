import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importing axios for making HTTP requests  


const CaptainSignup = () => {  // Component for Captain Signup page
  // Using useState to manage local state for form inputs

  const navigate = useNavigate(); // Hook to programmatically navigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 
  const [userData, setUserData] = useState({}); // State to hold user data

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


 const { captain, setCaptain } = React.useContext(CaptainDataContext); // Using context to manage captain data


  const submitHandler = async (e) => {

    e.preventDefault() // Prevent default form submission behavior
     const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
       vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    console.log(" Captain Registration Payload:", captainData);

   

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData); // Sending POST request to server
    
    if (response.status === 201) { // If response is successful
      const data = response.data; // Get data from response
      setCaptain(data.captain); // Update captain state with received data
      localStorage.setItem('token', data.token); // Store token in local storage
      navigate('/captain-home'); // Navigate to captain home page

    }

    setEmail(''); // Reset email field
    setFirstName(''); // Reset first name field
    setLastName(''); // Reset last name field
    setPassword(''); // Reset password field
    setVehicleColor(''); // Reset vehicle color field
    setVehiclePlate(''); // Reset vehicle plate field
    setVehicleCapacity(''); // Reset vehicle capacity field
    setVehicleType(''); // Reset vehicle type field 

  };

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-14 mb-8 ' src=' https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw'/>

        <form onSubmit={(e) => {
          submitHandler(e); // Call the submit handler
        }}>

          <h3 className='text-lg font-base mb-2'>Captain's Name </h3>
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

          <h3 className='text-lg font-medium mb-2'>Captain's Email</h3>
          <input
            required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <h3 className='text-lg font-medium mb-2'>Captain's Password</h3>
          <input
            required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-3 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-3 py-1 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-3 rounded py-2 px-4 w-full text-lg placeholder:text-base'>Create Captain Account</button>
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