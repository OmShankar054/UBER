import React , {useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel ] = useState( false)
    const finishRidePanelRef = useRef(null)

    useGSAP( function() {
      if(   finishRidePanel ){
        gsap.to(  finishRidePanelRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(  finishRidePanelRef.current,{ 
          transform: 'translateY(100%)'
        })
      }
    }, [ finishRidePanel] )


  return (
    <div className='h-screen relative'> 

       <div className='fixed p-6 top-1 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
         <Link to='/captain-home'  className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-line  "></i>
        </Link>
       </div>

        <div className='h-4/5 '>
            <img className='h-full w-full object-cover' src=" https://images.unsplash.com/photo-1608878746376-b65933cb0079?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='h-1/5 p-6 flex items-center justify-between  relative bg-yellow-400 pt-10'  
            onClick={() => {
                setFinishRidePanel(true)
            }}> 
        <h5 className='p-1 text-center w-[90%] absolute top-0 ' onClick={() =>{

        }} ><i className=" text-3xl text-red-500 ri-arrow-up-wide-line"></i> </h5>
         <h4 className='text-xl mt-1 font-semibold '> 2 KM away</h4>
         <button className ='mt-1 bg-green-800 text-white font-semibold p-3 px-10 rounded-lg ' >Complete Ride</button>
            
      </div>

      <div ref={finishRidePanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
        <  FinishRide />
      </div>


       


   </div>  
  )
}

export default CaptainRiding