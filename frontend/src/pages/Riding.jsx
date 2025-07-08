import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {

  const location = useLocation()
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })

  return (
    <div className='h-screen'> 

        <Link to='/home' className='fixed right-2 top-1 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium  ri-home-gear-line"></i>
        </Link>
        <div className='h-1/2 '>
        
        <LiveTracking />

        <img className='h-full w-full object-cover' src=" https://images.unsplash.com/photo-1608878746376-b65933cb0079?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='h-1/2 p-3 '>  {/*current ride status */}
        <div className="flex item-center justify-between">
        <img
          className="h-12"
          src="https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png"
          alt="car"
        />

        <div className="text-right ">
          <h2 className="text-lg font-medium capatalize">  {ride?.captain.fullname.firstname}</h2>
          <h4 className="text-xl font-semibold  capatalize -mt-1 -mb-1">{ride?.captain.vehicle.plate}</h4>
          <p className="test-sm text-gray-600">Maruiti Wagnor</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between  flex-col items-center">
        <div className=" w-full mt-5 font-sm ">
          

          <div className="flex item-center gap-6 p-3 border-b-2">
            <i className="ri-map-pin-time-line text-2xl"></i>{" "}
            {/* users final location */}
            <div>
              <h3 className="text-lg font-medium">  {ride?.destination} </h3>
              <p className="text-sm   text-gray-800"> Tatisilwai, Ranchi </p>
            </div>
          </div>

          <div className="flex item-center gap-6 p-3  ">
            <i className=" ri-money-rupee-circle-fill text-2xl"></i> {/* money */}
            <div>
              <h3 className="text-lg font-medium">  ₹{ride?.fare}</h3>
              <p className="text-sm   text-gray-800"> cash </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
        <button className='w-full mt-5 bg-green-800 text-white font-semibold p-2 rounded-lg'>Make a Payemnt </button>

        </div>

    </div>
  )
}

export default Riding