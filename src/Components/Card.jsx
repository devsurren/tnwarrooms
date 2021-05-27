import React from 'react';
import { motion  } from 'framer-motion';

const Card=({place,mobile,phone})=>{

    return(
        <>
          <motion.div
            whileHover={{
              scale:1.1,
              color:'rgba(255,255,255)',
              backgroundColor:'rgba(59, 130, 246,1)'
            }}
          className='rounded shadow-lg p-2 flex flex-col align-center'  >
                <h1 className='font-roboto font-bold text-center'>  <i class="fas fa-map-marker-alt px-2"></i>   {place}</h1>
                <h2 className='font-roboto font-semibold text-center py-2'> <i class="fas fa-mobile-alt px-2"></i>   {mobile}</h2>
                <h3 className='font-roboto font-semibold text-center'> <i class="fas fa-phone-alt px-2"></i>  {phone}</h3>
          </motion.div>
        </>
    )
}

export default Card;