import React from 'react';

const About=()=>{
    return(
        <>
        <div className='min-h-screen'>
             <div className='mt-30 sm:w-600 sm:h-400 p-4 md:p-0 mx-auto flex flex-col justify-center align-center capitalize font-black '>
                    <h1 className=' w-full  border-red-300  text-6xl my-4 font-roboto'> About us</h1>
                    <div className="w-1/2 bg-black h-10 rounded" ></div>
                    <p className='font-roboto text-xl py-6 '>Welcome  at tnwarrooms.com,We aim to deliver contact information about  war rooms around TamilNadu.We belive technology is the better way to provide solution for most of our daily life challanges.</p>
                </div>
        </div>
        </>
    )
}

export default About;