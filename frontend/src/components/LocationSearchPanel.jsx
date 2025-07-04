import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);

  //sample array of locations 
  const locations =[
    "23A, 1 Krishnapuri, road no- 5b, chutia, ranchi",
    "24B, 2 Krishnapuri, road no- 5b, chutia, ranchi",
    "25C, 3 Krishnapuri, road no- 5b, chutia, ranchi",
    "26D, 4 Krishnapuri, road no- 5b, chutia, ranchi",
  ]

  return (
    <div>
        {/*sample data*/}

         {
           locations.map (function(elem) {
            return  <div onClick={() => {
              props.setVehiclePanel(true)
            }} className='flex gap-4  border-2 p-3 rounded-xl border-gray-100 active:border-black  items-center my-2  mx-1 justify-start'>
           <h3 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full '><i className="ri-map-pin-user-fill text-xl"></i> </h3>
            <h4 className='font-medium'> {elem}  </h4>
           </div>
           })
          }  

    </div>
  )
}

export default LocationSearchPanel