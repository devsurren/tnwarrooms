import {useEffect,useState} from 'react';
import client from '../config/config'


export const useContentFul=()=>{

    const [data,setData]=useState([])

   

    useEffect(()=>{
        (()=>{
            client.getEntries().then((res)=>{
                let locdata=[];
                res.items.forEach((eachitem)=>{
                    locdata.push({
                        id:eachitem.sys.id,
                        place:eachitem.fields.location,
                        mobile:eachitem.fields.mobile,
                        phone:eachitem.fields.phone
                    })
                })
                setData(locdata)
                
            })
        })();
    
    },[])

    return {data}
}

