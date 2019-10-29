import React, { Component } from 'react';
import Cleave from 'cleave.js/react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
      splitAmount: ''
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
    return (
      <main className='mainPage--wrapper'>
        <h1 className='headline'>Tip Calculator</h1>
        <article className='calculator--wrapper'>
          <Cleave 
          placeholder = 'Total Bill'
          options = {{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
          }}
          value={this.state.totalBill}
          name='totalBill'
          className='number__input'
          onChange={this.handleInput}
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
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          <Cleave 
          placeholder = 'Party Size'
          options = {{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
          }}
          value={this.state.partySize}
          name='partySize'
          className='number__input'
          onChange={this.handleInput}
          /> 
          <button 
          type='button'
          className='calc__btn'
          onClick={this.calculateBill}>
            Calc Btn
          </button>
          <section className='results--wrapper'>
            <p>Tip:</p>
            <p>${this.state.tipAmount}</p>
          </section>
          <section className='results--wrapper'>
            <p>Total:</p>
            <p>${this.state.totalWithTip}</p>
          </section>
          <section className='results--wrapper'>
            <p>Per Person:</p>
            <p>${this.state.splitAmount}</p>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
