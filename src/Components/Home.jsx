import React,{useEffect, useState} from 'react';

import { useContentFul  } from '../hooks/useContentFul'

import Card from './Card';
import Loading from '../animation/Loading'

const Home=()=>{

    const[loading,setLoading]=useState(true);
    const[uiData,SetUiData]=useState([]);
    const { data  }=useContentFul();

    useEffect(()=>{
       if(data){
           SetUiData(data);
           setLoading(false);
       }
    },[data])

    return(
        <>
        
           {loading ? <Loading/> : <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4">
                { uiData.map((each)=>{
                        return <Card key={each.id} place={each.place} mobile={each.mobile} phone={each.phone}  />
                    })  }
            </div>  }
        </>
    )
}

export default Home;