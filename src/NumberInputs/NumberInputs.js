import React from 'react';
import Cleave from 'cleave.js/react'

const NumberInputs = ({placeholder, name, value, handleInput}) => {
  return (
    <Cleave 
    placeholder = {placeholder}
    options = {{
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    }}
    value={value}
    name={name}
    className='number__input'
    onChange={handleInput}
    /> 
  );
};

export default NumberInputs;