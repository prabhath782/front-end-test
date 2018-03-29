import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';
import { configure,shallow,mount} from 'enzyme';
import { Button } from 'semantic-ui-react'
import {expect} from 'code';

import {Sort} from '../src/components/sort';

configure({adapter: new Adapter()});

describe('Sorting pizza array',()=>{

let wrapper;
  beforeEach(()=>{
    wrapper = mount(<Sort />)    
  })

  it('should render sort component',()=>{
    expect(wrapper.find(Sort).length  ).to.equals(1);
  })

  it('should have a button',()=>{
      expect(wrapper.find(Button)).to.have.length(1);
      
  })

  it('should execute the onchangeHandler on button click',()=>{
      const stub = sinon.stub();
      const wrapper = shallow(<Button onClick = {stub}/>)
      wrapper.find('button').simulate('click')
      //console.log(wrapper.debug());
      expect(stub.calledOnce).to.equal(true);
  })

})