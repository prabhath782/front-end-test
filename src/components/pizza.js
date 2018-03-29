//Importing components

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import {Input,Button,Table,TableBody,TableRow,TableCell} from 'semantic-ui-react'

import {Loading} from './loading';
import './pizza.css';
import {Filter} from './filter';
import {Sort} from './sort';

//React class component showing all pizzas 
class Pizzas extends Component { 
  constructor(props){
    super(props)
    this.state = {
      sortClick:true,
      filterKey:'',
      pizzas:[],
      loading:true
    }
  }

  componentDidMount(){
    this.fetchPizzas()
  }

  // Fetching pizzas from json file using promises
    fetchPizzas=()=>{
       fetch('/pizza.json')
         .then(res=>res.json())
         .then(data=>{data.pizzas 
                this.setState({pizzas:data.pizzas,loading:false})})
         .catch(err=>{console.log( err)
                      this.setState({errors:err})});
    }

 // mapping through array of pizzas   
   pizzas = ()=>{    
     const pizzas = this.state.pizzas
     const filterKey = this.state.filterKey
       if(pizzas.length !==0){         
         const filteredPizzas = pizzas.filter(pizza=>pizza.toLowerCase().indexOf(filterKey.toLowerCase())!==-1);
         const pizzasData = filteredPizzas.map((pizza,index)=>(
                                          <TableRow key = {index}>
                                            <TableCell>{pizza}</TableCell>
                                          </TableRow>)
        )         
         return pizzasData;
       }
   }

//set sorted pizzas using setState
   sortHandler = (sorted)=>{
    this.setState({
      sortClick:!this.state.sortClick,
      pizzas:sorted
    })
   }

   filterHandler=(input)=>{
    this.setState({
      filterKey:input
    })    
  }

  render() { 
    const after = (
      <div className = 'ui container'>
        <div className= 'header'>
          <h1>Pizzas Available</h1>          
          <Filter onchange = {this.filterHandler}/>
          <Sort sort = {this.state.pizzas}
                click = {this.sortHandler}
                sortType = {this.state.sortClick}/>
        </div>               
         <Table celled
                striped                   
                color = 'blue'>
            <TableBody>
               {this.pizzas()}   
            </TableBody>
         </Table>
      </div>
    )

    const main = this.state.loading? <Loading/>:after
    return (
         <div>
          {main}
         </div>       
    )
  }
}

//exporting component
export default Pizzas