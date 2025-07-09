import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const navigate = useNavigate()

    const [otp, setOtp] = useState('')

    const submitHandler = async(e) =>{
        e.preventDefault()  /* If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.*/

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }

    }
  return (
     
    <div > 
        <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>

            <h3 className="text-2xl font-semibold mb-5"> Confirm this Ride to Start! </h3>
            <div className='flex items-center justify-between p-3 bg-orange-300 rounded-lg mt-4 ' >
                <div className='flex item-center gap-2  ' >
                    <img className='h-12 rounded-full object-cover w-12' src=" https://imgs.search.brave.com/YA4xXdvopDoSH6OA0iQGizeKTEYvJkooZMVfcdZgyNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmFpcXVpY2tkcmF3/LmNvbS9pbWdjb21w/cmVzc2VkL2ltZy9j/b21wcmVzc2VkXzk0/OGQ4NGYxZGFlMjVl/ZDY0YzE4ZWY3NDA1/ZTUzMTNiLndlYnA" alt="customer" />
                    <h5 className='text-lg font-medium mt-2.5 '>{props.ride?.user.fullname.firstname} </h5>
                </div>
                <h5 className='text-lg font-semibold' >2.5km</h5>
            </div>

            <div className='flex gap-2 justify-between  flex-col items-center'>
               
          

            <div className=' w-full mt-5 '>
                <div className='flex item-center gap-6  p-3 border-b-2'  >  
                    <i className="text-2xl ri-map-pin-user-line"></i>  {/* users current location */}
                    <div>
                        <h3 className='text-lg font-medium'> {props.ride?.pickup}</h3>
                         <p  className='text-sm   text-gray-800'> {props.ride?.pickup} Ranchi Railway station</p>
                    </div>

                </div>
                <div className='flex item-center gap-6 p-3 border-b-2' >
                      <i className=" text-2xl ri-map-pin-time-line"></i>  {/* users final location */}
                    <div>
                        <h3 className='text-lg font-medium'>   {props.ride?.destination}  </h3>
                         <p  className='text-sm   text-gray-800'>  {props.ride?.destination} Ranchi Airport </p>
                    </div>
                </div>

                <div className='flex item-center gap-6 p-3  '>
                    <i className="text-2xl ri-money-rupee-circle-fill"></i>  {/* money */}
                    <div>
                        <h3 className='text-lg font-medium'>  ₹{props.ride?.fare}  </h3>
                         <p  className='text-sm   text-gray-800'> cash </p>
                    </div>
                </div>
              </div>

            
                <div className='mt-6 w-full'>
                    <form onSubmit= {submitHandler}>

                    <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-4 py-4 font-mono text-lg rounded-lg w-full mt-3 mb-3 ' placeholder='Enter OTP' />

                     <Link to='/captain-riding' className ='w-full mt-1 flex justify-center bg-green-800 text-white font-semibold p-2 rounded-lg ' >Confirm</Link>

                <button onClick={()=>{
                    props.setConfirmRidePopupPanel(false)
                    props.setRidePopupPanel(false)
                }} className ='w-full mt-1 bg-red-600 text-white font-semibold p-2 rounded-lg ' >Cancel Ride</button>
                   </form>
                </div>
            
            </div>
    </div>
     
  )
}

export default ConfirmRidePopUp