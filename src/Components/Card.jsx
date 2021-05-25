import React from 'react';
import { motion  } from 'framer-motion';

const Card=({place,mobile,phone})=>{

    return(
        <>
          <motion.div
          animate={{
            color:'black',
            background:'white'
          }}
          whileHover={
            {
              originX:0,
              color:'white',
              background:'#60A5FA'
            }
          }
          className='rounded shadow-lg p-2 flex flex-col align-center'  >
                <h1 className='font-roboto font-bold text-center'>  <i class="fas fa-map-marker-alt px-2"></i>   {place}</h1>
                <h2 className='font-roboto font-semibold text-center py-2'> <i class="fas fa-mobile-alt px-2"></i>   {mobile}</h2>
                <h3 className='font-roboto font-semibold text-center'> <i class="fas fa-phone-alt px-2"></i>  {phone}</h3>
          </motion.div>
        </>
    )
}

export default Card;