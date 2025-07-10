import React from 'react'


const ConfirmRide = (props) => {
  return (
    <div> 
        <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props. setConfirmRidePanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>

            <h3 className="text-2xl font-semibold mb-5">Confirm your Vehicle</h3>

             <div className='flex gap-2 justify-between flex-col items-center'>
                  <img
                    className='h-[17%]'
                    src={
                      props.vehicleType === 'car'
                        ? 'https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png'
                        : props.vehicleType === 'auto'
                        ?  'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'
                        : props.vehicleType === 'moto'
                        ? 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'
                        : ''
                    }
                    alt='Selected Vehicle'
                  />
             </div>


            {/* <div className='flex gap-2 justify-between  flex-col items-center'>
                <img className='h-[17%]' src=" props.vehicleType === 'car'?
                 https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png"  
                 : props.vehicleType === 'auto'
                 ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                 props.vehicleType === 'moto' 
                 ? https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png
                 />
            </div> */}

            <div className=' w-full mt-5 '>
                <div className='flex item-center gap-6  p-3 border-b-2'  >  
                    <i className="text-xl ri-map-pin-user-line"></i>  {/* users current location */}
                    <div>
                        <h3 className='text-lg font-medium'>{props.pickup} </h3>
                         <p  className='text-sm   text-gray-800'> {props.pickup} </p>
                    </div>

                </div>
                <div className='flex item-center gap-6 p-3 border-b-2' >
                      <i className="ri-map-pin-time-line"></i>  {/* users final location */}
                    <div>
                        <h3 className='text-lg font-medium'>  {props.destination}  </h3>
                         <p  className='text-sm   text-gray-800'>  {props.destination}  </p>
                    </div>
                </div>

                <div className='flex item-center gap-6 p-3  '>
                    <i className=" ri-money-rupee-circle-fill"></i>  {/* money */}
                    <div>
                        <h3 className='text-lg font-medium'> ₹200{props.fare[props.vehicleType] } </h3>
                         <p  className='text-sm   text-gray-800'> cash amount </p>
                    </div>
                </div>
              </div>

            <div>
                <button
                     onClick={() => {

                      if (!props.createRide) {
                        console.error("createRide function is not passed in props.");
                        return;
                       }
                       props.setVehicleFound(true);
                       props.setConfirmRidePanel(false);
                       props.createRide(); // <-- THIS is the correct function to call
                       }}
                        className='w-full mt-5 bg-green-800 text-white font-semibold p-2 rounded-lg'>
                        Confirm
                    </button>

            </div>

    </div>
  )
}


export default ConfirmRide