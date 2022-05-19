import React from 'react';

const Contact=()=>{
    return(
        <>
        <div className='min-h-screen'>
             <div className='mt-30  sm:w-600 sm:h-400 p-4 md:p-0 mx-auto flex flex-col justify-center align-center  font-black  '>
                     <h1 className=' border-red-300  text-6xl my-4 font-roboto capitalize'>contact us</h1>
                     <div className="w-1/2 bg-black h-10 rounded" ></div>
                     <h3 className='font-roboto font-extrabold text-2xl py-6 capitalize'>Email : </h3>
                     <h4 className='font-roboto font-extrabold text-xl py-1'>surendranuiux@gmail.com</h4>
                </div>
        </div> 
        </>
    )
}

export default Contact;