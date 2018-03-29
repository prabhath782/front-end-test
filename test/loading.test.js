import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';
import { configure,shallow,mount} from 'enzyme';
import { Button } from 'semantic-ui-react'
import {expect} from 'code';
import {Loader} from 'semantic-ui-react';

import {Loading} from '../src/components/loading';

describe('Loader component',()=>{
    let wrapper;

    beforeEach(()=>{
     wrapper = shallow(<Loading />);
    });

    it('rendering loader component',()=>{
        expect(wrapper.find(Loader).length).to.equals(1);
    })

})