import React from 'react';

const Results = ({type, amount}) => {
  
    return (
      <section className='results--wrapper'>
        <p>{type}:</p>
        <p>${amount}</p>
      </section>
    );

}

export default Results;