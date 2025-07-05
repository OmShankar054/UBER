import React from 'react'
import  { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {


  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

   useGSAP( function() {
      if(  ridePopupPanel  ){
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(ridePopupPanelRef.current,{ 
          transform: 'translateY(100%)'
        })
      }
    }, [ridePopupPanel] )

    useGSAP( function() {
      if(  confirmRidePopupPanel ){
        gsap.to( confirmRidePopupPanelRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to( confirmRidePopupPanelRef.current,{ 
          transform: 'translateY(100%)'
        })
      }
    }, [confirmRidePopupPanel] )




  return (
     <div className='h-screen'> 

       <div className='fixed p-6 top-1 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
         <Link to='/captain-home'  className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-line  "></i>
        </Link>
       </div>

        <div className='h-3/5 '>
            <img className='h-full w-full object-cover' src=" https://images.unsplash.com/photo-1608878746376-b65933cb0079?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='h-2/5 p-6 '>  {/* */}
            <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
        < RidePopUp setRidePopupPanel= {setRidePopupPanel} setConfirmRidePopupPanel= {setConfirmRidePopupPanel} />
      </div>

      <div ref={ confirmRidePopupPanelRef} className='fixed w-full h-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
        < ConfirmRidePopUp setConfirmRidePopupPanel= {setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>


   </div>   
  )
}

export default CaptainHome