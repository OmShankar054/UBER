import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 

const FinishRide = (props) => {
    const navigate = useNavigate() 

     async function endRide() {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }



  return (
      <div > 
        <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props. setFinishRidePanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>

            <h3 className="text-2xl font-semibold mb-5"> Finished this Ride </h3>
            <div className='flex items-center justify-between p-4 border-4 border-yellow-400 bg-orange-100  rounded-lg mt-4 ' >
                <div className='flex item-center gap-2  ' >
                    <img className='h-12 rounded-full object-cover w-12' src=" https://imgs.search.brave.com/YA4xXdvopDoSH6OA0iQGizeKTEYvJkooZMVfcdZgyNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmFpcXVpY2tkcmF3/LmNvbS9pbWdjb21w/cmVzc2VkL2ltZy9j/b21wcmVzc2VkXzk0/OGQ4NGYxZGFlMjVl/ZDY0YzE4ZWY3NDA1/ZTUzMTNiLndlYnA" alt="customer" />
                    <h5 className='text-lg font-medium mt-2.5 '> {props.ride?.user.fullname.firstname}Pawan User</h5>
                </div>
                <h5 className='text-lg font-semibold' >4.5km</h5>
            </div>

            <div className='flex gap-2 justify-between  flex-col items-center'>
               
          

            <div className=' w-full mt-5 '>
                <div className='flex item-center gap-6  p-3 border-b-2'  >  
                    <i className="text-xl ri-map-pin-user-line"></i>  {/* users current location */}
                    <div>
                        <h3 className='text-lg font-medium'>  {props.ride?.pickup} </h3>
                         <p  className='text-sm   text-gray-800'> {props.ride?.pickup}Ranchi Railway station</p>
                    </div>

                </div>
                <div className='flex item-center gap-6 p-3 border-b-2' >
                      <i className="ri-map-pin-time-line"></i>  {/* users final location */}
                    <div>
                        <h3 className='text-lg font-medium'>   {props.ride?.destination} </h3>
                         <p  className='text-sm   text-gray-800'>  {props.ride?.destination}Ranchi Airport </p>
                    </div>
                </div>

                <div className='flex item-center gap-6 p-3  '>
                    <i className=" ri-money-rupee-circle-fill"></i>  {/* money */}
                    <div>
                        <h3 className='text-lg font-medium'>  {props.ride?.fare} </h3>
                         <p  className='text-sm   text-gray-800'> cash-amount as per distance and vehicle </p>
                    </div>
                </div>
              </div>

            
                <div className='mt-6 w-full'>

                     <button onClick={endRide} 
                        className ='w-full mt-1 flex justify-center bg-green-800 text-white font-semibold p-2 rounded-lg ' > Ride Completed
                     </button>   
                         <p className='text-red-900 bg-gray-50 font-bold mt-2 text-xs pl-2   '>Click on Ride Completed only after receiving the payment.</p>            
                </div>
            
            </div>
    </div>
  )
}

export default FinishRide