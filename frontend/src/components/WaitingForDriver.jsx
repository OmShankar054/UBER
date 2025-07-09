import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[90%] absolute top-0 cursor-pointer"
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        {" "}
        <i className=" text-3xl text-green-600 ri-arrow-down-wide-line"></i>{" "}
      </h5>

      <div className="flex item-center justify-between">
        <img
          className="h-12"
          src="https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png"
          alt="car"
        />

        <div className="text-right">
          <h2 className="text-lg font-medium "> {props.ride?.captain.fullname.firstname} </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1"> {props.ride?.captain.vehicle.plate} </h4>
          <p className="test-sm text-gray-600">Maruiti Wagnor</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between  flex-col items-center">
        <div className=" w-full mt-5 ">
          <div className="flex item-center gap-6  p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-line"></i>{" "}
            {/* users current location */}
            <div>
              <h3 className="text-lg font-medium">  {props.ride?.pickup} </h3>
              <p className="text-sm   text-gray-800">  {props.ride?.pickup}</p>
              <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
            </div>
          </div>

          <div className="flex item-center gap-6 p-3 border-b-2">
            <i className="ri-map-pin-time-line"></i>{" "}
            {/* users final location */}
            <div>
              <h3 className="text-lg font-medium">  {props.ride?.destination} </h3>
              <p className="text-sm   text-gray-800">  {props.ride?.destination} </p>
            </div>
          </div>

          <div className="flex item-center gap-6 p-3  ">
            <i className=" ri-money-rupee-circle-fill"></i> {/* money */}
            <div>
              <h3 className="text-lg font-medium"> ₹{props.ride?.fare} </h3>
              <p className="text-sm   text-gray-800"> cash </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
