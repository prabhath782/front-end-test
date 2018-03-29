import React from 'react';
import fetch from 'isomorphic-fetch';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon'
import { configure, shallow,mount } from 'enzyme';
import { Table, TableRow, TableBody,TableHeaderCell } from 'semantic-ui-react'
import {expect} from 'code';

import Pizzas from '../src/components/pizza';
import {Loading} from '../src/components/loading';
import {Filter} from '../src/components/filter';
import {Sort} from '../src/components/sort';

const baseurl = 'http://localhost:8080/pizza.json';
configure({adapter: new Adapter()});
describe('Loading pizza content', () => {

    let wrapper;  
    beforeEach(() => {
        wrapper = shallow(<content />);
    });    
    
    it('should render Loading Component', () => {
        expect(wrapper.contains(<Loading/>));
    });

    it('should render Filter Component', () => { const stub = sinon.stub();
        const wrapper = shallow(<content onchange = {stub}/>)
        expect(wrapper.contains(<Filter/>));
    });

    it('should render Sort Component', () => {
        expect(wrapper.contains(<Sort/>));
    });
    
    it('should have fetch Request status 200',(done)=>{
        fetch(baseurl).then(res=>{
            expect(res.status).equals(200);
        })
        done();
    });

    it('should have array of Pizzas ',()=>{
        fetch(baseurl).then(res=> res.json())
                      .then(data=>
                        expect(data.pizzas.length).equals(9))
        
    });

    it('Should render Filter component calling onchange function',()=>{       
        console.log(wrapper.debug());
    })


});