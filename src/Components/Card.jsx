import React from 'react';

const Card=({place,mobile,phone})=>{

    return(
        <>
          <div className=' rounded shadow-lg p-2 flex flex-col align-center'  >
                <h1 className='font-roboto font-bold text-center'>  <i class="fas fa-map-marker-alt px-2"></i>   {place}</h1>
                <h2 className='font-roboto font-semibold text-center py-2'> <i class="fas fa-mobile-alt px-2"></i>   {mobile}</h2>
                <h3 className='font-roboto font-semibold text-center'> <i class="fas fa-phone-alt px-2"></i>  {phone}</h3>
          </div>
        </>
    )
}

export default Card;