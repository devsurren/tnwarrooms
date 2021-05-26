import React from 'react';
import Lottie from 'react-lottie';
import * as spinner from './loading2Xspeed.json';

const Loading=()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: spinner.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

     return <Lottie style={{marginTop:'50vh'}}  options={defaultOptions} height={50} width={50}  />
}
export default Loading