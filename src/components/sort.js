//Importing components
import React from 'react'
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './sort.css'

//exporting react functional component
export const Sort = ({sort,click,sortType}) => {  
   const onclickHandler = ()=>{
       let sortedArray = [...sort]
        sortedArray.sort((first,second)=>{
            if(sortType){
                if (first>second) {
                    return 1;
                  }
                  if (first<second) {
                    return -1;
                  }
                  return 0;
            }            
            else{
                if (first>second) {
                    return -1;
                  }
                  if (first<second) {
                    return 1;
                  }
                  return 0;
            }
        });
       click(sortedArray)
    }
    

  return (
    <div className ='buttondiv' >
     <Button primary
             onClick = {onclickHandler}>Sort
     </Button>
    </div>
  )
}

Sort.propTypes = {
    sort : PropTypes.array,
    click: PropTypes.func,
    sortType: PropTypes.bool
}


