import React from 'react'
 

const RidePopUp = (props) => {
  return (
    <div> 
        <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props.setRidePopupPanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>

            <h3 className="text-2xl font-semibold mb-5">New Ride Available! </h3>
            <div className='flex items-center justify-between p-3 bg-orange-300 rounded-lg mt-4 ' >
                <div className='flex item-center gap-2  ' >
                    <img className='h-12 rounded-full object-cover w-12' src=" https://imgs.search.brave.com/YA4xXdvopDoSH6OA0iQGizeKTEYvJkooZMVfcdZgyNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmFpcXVpY2tkcmF3/LmNvbS9pbWdjb21w/cmVzc2VkL2ltZy9j/b21wcmVzc2VkXzk0/OGQ4NGYxZGFlMjVl/ZDY0YzE4ZWY3NDA1/ZTUzMTNiLndlYnA" alt="customer" />
                    <h5 className='text-lg font-medium mt-2.5 '>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h5>
                </div>
                <h5 className='text-lg font-semibold' >2.5km</h5>
            </div>

            <div className='flex gap-2 justify-between  flex-col items-center'>
               
          

            <div className=' w-full mt-5 '>
                <div className='flex item-center gap-6  p-3 border-b-2'  >  
                    <i className="text-xl ri-map-pin-user-line"></i>  {/* users current location */}
                    <div>
                        <h3 className='text-lg font-medium'> {props.ride?.pickup} </h3>
                         <p  className='text-sm   text-gray-800'> Railway Station</p>
                    </div>

                </div>
                <div className='flex item-center gap-6 p-3 border-b-2' >
                      <i className="ri-map-pin-time-line"></i>  {/* users final location */}
                    <div>
                        <h3 className='text-lg font-medium'>   {props.ride?.destination } </h3>
                         <p  className='text-sm   text-gray-800'> Airport, Ranchi </p>
                    </div>
                </div>

                <div className='flex item-center gap-6 p-3  '>
                    <i className=" ri-money-rupee-circle-fill"></i>  {/* money */}
                    <div>
                        <h3 className='text-lg font-medium'> ₹ {props.ride?.fare} </h3>
                         <p  className='text-sm   text-gray-800'> cash </p>
                    </div>
                </div>
              </div>

            
                <div className='flex mt-5 w-full items-center justify-between'>
                    
                    <button onClick={()=>{
                    props.setRidePopupPanel(false)
                }} className ='mt-1 bg-gray-300 text-gray-800 font-semibold p-3 px-10  rounded-lg ' >Ignore</button>


                    <button onClick={()=>{
                       props.setConfirmRidePopupPanel(true)
                       props.confirmRide()
                }} className ='mt-1 bg-green-800 text-white font-semibold p-3 px-10 rounded-lg ' >Accept</button>

                
            
                </div>


            </div>
    </div>
  )
}

export default RidePopUp