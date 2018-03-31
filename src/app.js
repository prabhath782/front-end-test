import React, { Component } from 'react'
import Pizzas from './components/pizza';

const constext = React.createContext('');

class App extends Component {

  state = {
    sortClick:true,
    filterKey:'',
    pizzas:[],
    loading:true,
    update:(pizzas)=>{this.setState({pizzas:pizzas})}

  }

  constructor(props){
   super(props)
  }
  
  render() {     
    return (
      <context.Provider value = {this.state}>
        <Pizzas/>
        </context.Provider>
    )
  }
}

export default App;