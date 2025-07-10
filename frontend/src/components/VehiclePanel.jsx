import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 className= "p-1 text-center w-[90%] absolute top-0 cursor-pointer" onClick ={() => {
                props.setVehiclePanel(false)
            }}> <i className=" text-3xl text-red-600 ri-arrow-down-wide-line"></i> </h5>
                 <h3 className="text-2xl font-semibold mb-5">Select a Vehicle</h3>

                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                      props.selectVehicle('car')
                }} className="flex border-2  active:border-black mb-2 rounded-xl items-center justify-between w-full p-3 ">
                    <img
                      className="h-11"
                        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                      alt="car"
                    />
                    <div className="ml-4 w-1/2">
                      <h4 className="font-medium text-base">QuickCabGo <span><i className="ri-user-5-fill"></i> 4</span></h4>
                      <h5 className="font-medium text-sm">4 mins away</h5>
                      <p className="font-normal text-xs">Affordable</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹{props.fare.car} 200</h2>
                </div>

                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.selectVehicle('auto')
                }}className="flex border-2  active:border-black mb-2 rounded-xl items-center justify-between w-full p-3 ">
                    <img
                      className="h-11"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                      alt="auto"
                    />
                    <div className="ml-4 w-1/2">
                      <h4 className="font-medium text-base">QuickCabAuto <span><i className="ri-user-5-fill"></i> 2</span></h4>
                      <h5 className="font-medium text-sm">2 mins away</h5>
                      <p className="font-normal text-xs">Affordable and safe rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹{props.fare.auto}120</h2>
                </div>

                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                       props.selectVehicle('moto')
                }}className="flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3 ">
                    <img
                      className="h-11"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                      alt="bike"
                    />
                    <div className="ml-4 w-1/2">
                      <h4 className="font-medium text-base"> QuickCabMoto <span><i className="ri-user-5-fill"></i> 1</span></h4>
                      <h5 className="font-medium text-sm">5 mins away</h5>
                      <p className="font-normal text-xs">Affordable, safe rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹100 {props.fare.moto}</h2>
                </div>
    </div>
  )
}

export default VehiclePanel;