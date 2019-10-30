import React, { Component }from 'react';
import Cleave from 'cleave.js/react'
import '../App/App.scss'


class CreditCard extends Component  {


  render() {
    const cards = []
    for(let i = 0; i < this.props.qty; i++ ){
    cards.push(<Cleave 
      placeholder = 'Enter Credit Card Information '
      options = {{
        creditCard: true,
      }}
      className='number__input'
      key={i}
      /> )
    }
    
      return (
        <section className='creditcard--wrapper'>
          <article className='credit-input--wrapper'>
            {cards}
          </article>
          <button 
            type='button'
            className= 'calc__btn'
            id='split__btn'
            >
            Split Bill
          </button>
        </section>
      );

  }
};

export default CreditCard;