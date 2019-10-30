import React from 'react';
import { shallow } from 'enzyme';
import CreditCard from './CreditCard'

describe('Results', () => {

it('should match the snapshot', () => {
    let wrapper = shallow(<CreditCard  qty={1}/>)
    expect(wrapper).toMatchSnapshot();
 })

 it('should match the snapshot', () => {
  let wrapper = shallow(<CreditCard  qty={0}/>)
  expect(wrapper).toMatchSnapshot();
})

})