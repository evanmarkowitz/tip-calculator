import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should handle input correctly', () => {
    const mockEvent = { target: { name: 'totalBill', rawValue: 200} };
    const expected = 200
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('totalBill')).toEqual(expected);
  })

  it('should show allow a user to erase the number', () => {
    const mockEvent = { target: { name: 'totalBill', rawValue: ''} };
    const expected = ''
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('totalBill')).toEqual(expected);
  })

  it('should show an error if a number is not provided', () => {
    const mockEvent = { target: { name: 'totalBill', rawValue: 'f'} };
    const expected = 'Please only enter Numbers.'
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('errorMessage')).toEqual(expected);
  })

  it('should save the percent in state', () => {
    const mockEvent = { target: { name: 'tipPercentage', value: 15} };
    const expected = 15
    wrapper.instance().handlePercentageClick(mockEvent);
    expect(wrapper.state('tipPercentage')).toEqual(expected);
  })

  it('should put an error in state if all fields are not full when clicking calculate', () => {
    const errorMessage = 'Please fill out all fields.'
    wrapper.instance().validateInputs()
    expect(wrapper.state('errorMessage')).toEqual(errorMessage);
  })

  it('should calculate a bill', () => {
    const mockTotal = { target: { name: 'totalBill', rawValue: 200} };
    wrapper.instance().handleInput(mockTotal);
    const mockSize = { target: { name: 'partySize', rawValue: 2} };
    wrapper.instance().handleInput(mockSize);
    const mockPercent = { target: { name: 'tipPercentage', value: 10} };
    wrapper.instance().handlePercentageClick(mockPercent);
    wrapper.instance().calculateBill();
    expect(wrapper.state('totalWithTip')).toEqual("220.00");
  })


})
