import React, { Component } from 'react';
import Cleave from 'cleave.js/react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalBill: '',
      partySize: ''
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
          /> 
          <Cleave 
          placeholder = 'Party Size'
          options = {{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
          }}
          value={this.state.partySize}
          name='partySize'
          /> 
        </article>
      </main>
    );
  }
}

export default App;
