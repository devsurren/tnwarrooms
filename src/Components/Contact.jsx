import React from 'react';

const Contact=()=>{
    return(
        <>
             <div className='sm:w-600 sm:h-400 p-4 md:p-0 mx-auto flex flex-col justify-center align-center capitalize font-black  '>
                     <h1 className=' border-red-300  text-6xl my-4 font-roboto'>contact us</h1>
                     <div className="w-1/2 bg-black h-10 rounded" ></div>
                     <h3 className='font-roboto font-extrabold text-2xl py-6 '>Email : </h3>
                     <h4 className='font-roboto font-extrabold text-xl py-1'>email@email.com</h4>
                </div>
         
        </>
    )
}

export default Contact;