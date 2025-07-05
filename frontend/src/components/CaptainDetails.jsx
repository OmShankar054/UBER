import React from 'react'

const CaptainDetails = () => {
  return (
     <div>
         <div className='flex item-center justify-between'>
              <div className='flex item-center justify-start gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover ' src="https://imgs.search.brave.com/JWysgT9jkqqeL36CxDvFnYUnbRcq5sD00GEitVjPBXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MjE2Lzc1MC9zbWFs/bC9jYXJ0b29uLW1h/bi1hdmF0YXItY2hh/cmFjdGVyLW1hbGUt/YXZhdGFyLXByb2Zp/bGUtZnJlZS1wbmcu/cG5n" alt="" />
                <h4 className='text-lg font-medium '>Captain name</h4>
              </div>

              <div>
                <h4 className='text-xl font-semibold'>₹1200.43</h4>
                <p className='text-sm text-green-150'> Earned</p>
              </div>
            </div>

            <div className='flex p-4 mt-8 bg-yellow-50 rounded-xl justify-center gap-5 items-start'>
              <div className='text-center'>
                <i className="text-3xl mb-2  font-thin ri-hourglass-2-fill"></i>
                <h5 className='text-lg font-medium '>7.8 </h5>
                <p className='text-sm text-gray-600 '>Hours Online</p>
              </div>

              <div className='text-center'>
                <i className="text-3xl mb-2  font-thin ri-speed-up-fill"></i>
                 <h5 className='text-lg font-medium '>7.8 </h5>
                <p className='text-sm text-gray-600 '>Hours Online</p>
              </div>

              <div className='text-center'>
                <i className="text-3xl mb-2  font-thin ri-add-box-line"></i>
                 <h5 className='text-lg font-medium '>7.8 </h5>
                <p className='text-sm text-gray-600 '>Hours Online</p>
              </div>
            </div>
     </div>
  )
}

export default CaptainDetails