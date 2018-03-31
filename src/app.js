import React, { Component } from 'react'
import Pizzas from './components/pizza';

class App extends Component {

  constructor(props){
   super(props)
  }
  
  render() {     
    return (
      <div>
        <Pizzas/>
      </div>
    )
  }
}

export default App;