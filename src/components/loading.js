//importing components
import React from 'react'
import {Loader,Dimmer,} from 'semantic-ui-react'

// functional component will loaded when fetching data and return jsx elements
export const Loading = ()=>{
    return(                
            <div>
                <Dimmer active inverted>
                 <Loader size='massive' > Loading...</Loader>
                </Dimmer>                 
            </div>
        
        )
}

