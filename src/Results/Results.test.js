import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results'

describe('Results', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Results  type='Total' amount={200}/>)
    expect(wrapper).toMatchSnapshot();
 })

})