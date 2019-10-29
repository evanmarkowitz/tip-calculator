import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Results from '../Results/Results'
import NumberInputs from '../NumberInputs/NumberInputs'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalBill: '',
      tipPercentage: '',
      partySize: '',
      tipAmount: '',
      totalWithTip: '',
      splitAmount: '',
      availablePercentages: [10, 15, 20]
    }
  }
  
  handleInput = (e) => {
    let value = parseInt(e.target.rawValue)
    this.setState({[e.target.name]: value})
  }

  handlePercentageClick = (e) => {
    let value = parseInt(e.target.value)
    this.setState({[e.target.name]: value})
  }

  calculateBill = () => {
    let tipAmount = (this.state.totalBill * this.state.tipPercentage / 100)
    this.setState({ tipAmount: tipAmount.toFixed(2) })
    let totalWithTip = tipAmount + this.state.totalBill
    this.setState({ totalWithTip: totalWithTip.toFixed(2)})
    let splitAmount = totalWithTip / this.state.partySize
    this.setState({ splitAmount: splitAmount.toFixed(2) })
  }

  render() {
    const buildPercentages = this.state.availablePercentages.map(percent => {
      return <MenuItem value={percent} key={percent}>{percent}</MenuItem>
    })
    return (
      <main className='mainPage--wrapper'>
        <h1 className='headline'>Tip Calculator</h1>
        <article className='calculator--wrapper'>
          <NumberInputs 
            placeholder = 'Total Bill'
            value={this.state.totalBill}
            name='totalBill'
            handleInput={this.handleInput}
          />
          <Select 
          value={this.state.tipPercentage} 
          displayEmpty 
          name='tipPercentage'
          onChange={this.handlePercentageClick}
          className='number__input'
          id='percentage__input'
          >
            <MenuItem value="" disabled>
              Select a Tip From The Dropdown Menu
            </MenuItem>
            {buildPercentages}
          </Select>
          <NumberInputs 
            placeholder = 'Party Size'
            value={this.state.partySize}
            name='partySize'
            handleInput={this.handleInput}
          />
          <button 
          type='button'
          className='calc__btn'
          onClick={this.calculateBill}>
            Calc Btn
          </button>
          <Results type='Tip' amount={this.state.tipAmount}/>
          <Results type='Total' amount={this.state.totalWithTip}/>
          <Results type='Per Person' amount={this.state.splitAmount}/>
        </article>
      </main>
    );
  }
}

export default App;
