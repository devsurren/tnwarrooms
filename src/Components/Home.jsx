import React from 'react';

import { useContentFul  } from '../hooks/useContentFul'
import Card from './Card';

const Home=()=>{

    const { data  }=useContentFul();

    return(
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4">
                { data.map((each)=>{
                        return <Card key={each.id} place={each.place} mobile={each.mobile} phone={each.phone}  />
                    })  }
            </div>
        </>
    )
}

export default Home;