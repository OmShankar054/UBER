import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div> 
        <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props.setVehiclePanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>

            <h3 className="text-2xl font-semibold mb-5">Confirm your Vehicle</h3>

            <div className='flex gap-2 justify-between  flex-col items-center'>
                <img className='h-[17%]' src="https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png" alt="car" />
            </div>

            <div className=' w-full '>
                <div className='flex item-center gap-6 '>  
                    <i className="text-xl ri-map-pin-user-line"></i>  {/* users current location */}
                    <div>
                        <h3 className='text-lg font-medium'> Road no-5b, Krishnapuri </h3>
                         <p  className='text-sm   text-gray-800'> Chutia, Ranchi</p>
                    </div>

                </div>
                <div>
                     <i className="text-xl ri-map-pin-user-line"></i>  {/* users final location */}
                    <div>
                        <h3 className='text-lg font-medium'>  CIT,  </h3>
                         <p  className='text-sm   text-gray-800'> Tatisilwai, Ranchi </p>
                    </div>
                </div>

                <div>
                    <i className="text-xl ri-map-pin-user-line"></i>  {/* money */}
                    <div>
                        <h3 className='text-lg font-medium'> ₹120 </h3>
                         <p  className='text-sm   text-gray-800'> cash </p>
                    </div>
                </div>
              </div>

            <div>
                <button className='w-full bg-green-300 text-white font-semibold p-2 rounded-lg ' >Confirm</button>
            </div>

    </div>
  )
}

export default ConfirmRide