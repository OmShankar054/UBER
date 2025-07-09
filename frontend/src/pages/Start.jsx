import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
return (
   <div>
		<div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1743732407061-65ab2fee36b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
		 <img className='w-20 ml-10 ' src='  https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b652bd5f15b96e6dbd1aa1/1656115924895/uber+logo+white.png?format=1500w'/>
			 
	    	<div className='bg-white pb-7 py-5 px-5 ' >
			    <h2 className='text-3xl font-bold'>Get started with UBER</h2>
		    	<Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 '>Continue</Link>
		    </div>
	    </div>
    </div>
);
};

export default Start