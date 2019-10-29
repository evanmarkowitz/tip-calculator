import React, { Component } from 'react';
import Cleave from 'cleave.js/react'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalBill: '',
      partySize: '',
      tipAmount: '',
      totalWithTip: ''
    }
  }
  
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.rawValue})
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
          /> 
          <Cleave 
          placeholder = 'Party Size'
          options = {{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
          }}
          value={this.state.partySize}
          name='partySize'
          className='number__input'
          /> 
          <button className='calc__btn'>
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
        </article>
      </main>
    );
  }
}

export default App;
