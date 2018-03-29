import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon'
import {shallow,configure,mount} from 'enzyme'
import {expect} from 'code';

import {Input} from 'semantic-ui-react';
import {Filter} from '../src/components/filter';

configure({adapter: new Adapter()});

describe('Filter Pizzas', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Filter/>);
    });

    it('should have input of type text', () => {
         expect(wrapper.find(Input).length).to.equal(1);
    });

    it('should execute onchangeHandler',()=>{
        const stub = sinon.stub();
        const wrapper = shallow(<Input onChange = {stub}/>)
        wrapper.find('input').simulate('change');
        expect(stub.calledOnce).to.equal(true);        
    })    
});