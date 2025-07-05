import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { Link } from "react-router-dom";
 import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
     const [pickup, setPickup] = useState("");
     const [destination, setDestination] = useState("");
     const [panelOpen, setPanelOpen] = useState(false);
     const vehiclePanelRef = useRef(null)
     const ConfirmRidePanelRef = useRef(null)
     const vehicleFoundRef = useRef(null)
     const waitingForDriverRef = useRef(null)

     const panelRef = useRef(null)
     const panelCloseRef = useRef(null)     
     const [vehiclePanel, setVehiclePanel ] = useState(false) 
     const [confirmRidePanel, setConfirmRidePanel]= useState(false) 
     const [vehicleFound, setVehicleFound] = useState(false)
     const [waitingForDriver, setWaitingForDriver] = useState(false)

    const submitHandler = (e) => { 
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
    }

    useGSAP( function(){  // GSAP animations can be added here
     if(panelOpen){
        gsap.to(panelRef.current, {
            height: '60%',
            padding:20
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1,
            duration: 0.5,
            
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
        })

        gsap.to(panelCloseRef.current, {
            opacity: 0,
            duration: 0.5
        })
    }

    }, [panelOpen])  

    useGSAP(function(){
      if(vehiclePanel){
        gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(vehiclePanelRef.current,{ 
          transform: 'translate(100%)'
        })
      }
    }, [vehiclePanel] )

    useGSAP(function(){
      if(confirmRidePanel){
        gsap.to( ConfirmRidePanelRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to( ConfirmRidePanelRef.current,{ 
          transform: 'translate(100%)'
        })
      }
    }, [ confirmRidePanel] )

     useGSAP(function(){
      if( vehicleFound){
        gsap.to(  vehicleFoundRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(  vehicleFoundRef.current,{ 
          transform: 'translate(100%)'
        })
      }
    }, [ vehicleFound] )

     useGSAP(function(){
      if( waitingForDriver  ){
        gsap.to(   waitingForDriverRef.current, {
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(   waitingForDriverRef.current,{ 
          transform: 'translate(100%)'
        })
      }
    }, [  waitingForDriver] )




    return (
        <div className="h-screen relative overflow-hidden ">
            <img className="w-20 absolute left-5 top-5" src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="Logo" />

            <div className=" h-screen w-screen">
                {/* temporary image */}
                <img className="w-full h-full object-cover" src=" https://images.unsplash.com/photo-1617721042495-04e739b9739d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" />
            </div>

            <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
                   <div className="h-[30%] p-5 bg-white relative  ">
                    <h5 ref={panelCloseRef} onClick={() => {
                         setPanelOpen(false)} 
                    } className="absolute opacity-0 top-3 right-7 text-3xl ">
                        <i className="ri-arrow-down-wide-line"></i>   {/* This icon indicates the panel can be closed */}
                    </h5>

                     <h4 className="text-3xl font-semibold ">Find a Trip</h4>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                            }} > 

                          <div className="line absolute h-20 w-2 top-[46%] left-11 bg-gray-900 rounded-full "></div>
                          <input
                            onClick={() => {
                               setPanelOpen(true)
                            }}

                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-6 pb-3'
                            type="text"
                            placeholder="Enter a pickup location"
                            />
                            
                            <input
                            onClick={() => {  // This will open the panel when the input is clicked
                               setPanelOpen(true) // This is just a placeholder for the panel logic
                            }}
                            value={destination} 
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3 pb-3'
                            type="text"
                            placeholder="Enter a destination location"

                            />
                        </form>
                   </div>

                   <div ref={panelRef} className=" bg-white h-0">
                         <LocationSearchPanel setPanelOpen={setPanelOpen}   setVehiclePanel={setVehiclePanel} /> {/* */ }
                   </div>


                   
            </div>

            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 w-full px-3 py-10 pt-10">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div> 

            <div  ref={ConfirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-8 pt-12">
                < ConfirmRide setConfirmRidePanel={setConfirmRidePanel }  setVehicleFound={setVehicleFound} />
            </div>

             <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 w-full px-3 py-10 pt-12">
                 <LookingForDriver  setVehicleFound={setVehicleFound} />  
            </div>

            <div ref={waitingForDriverRef}  className="fixed w-full z-10 bottom-0  bg-white p-3 w-full px-3 py-10 pt-12">
                 < WaitingForDriver  waitingForDriver={waitingForDriver}   />  
            </div>




        </div>
    );
};


export default Home;
