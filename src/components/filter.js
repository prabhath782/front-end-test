//Importing components
import React from 'react'
import PropTypes from 'prop-types'
import {Input} from 'semantic-ui-react'

import './filter.css'

//exporting react functional component
export const Filter = ({onchange}) => {

//method is called on onChange of input field  
    const onchangeHandler = (e)=>{
       onchange(e.target.value)   
    } 

  return (
    <div>
      <Input className = 'inputField'
             focus
             placeholder = "search for pizza"
             onChange = {onchangeHandler}/>
    </div>
  )
}

Filter.propTypes = {
  onchange : PropTypes.func
}