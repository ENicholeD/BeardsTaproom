/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholCon = null;
  let _pints = 0;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: _name, brand: _brand, price: _price, alcoholCon: _alcoholCon, pint: _pints});
  }

 return (
  <div>
   <form>
    <input
     type='text'
     id='names'
     placeholder='Type'/>
    <input
     type='text'
     id='brand'
     placeholder='Brand'/>
    <input
    type='text'
     id='price'
     placeholder='Price'/>
       <input
         type='text'
         id='alcoholCon'
         placeholder='Alcohol Content' />
       <input
         type='number'
         id='pints'
         min='0'
         placeholter= '0'
         />
    <button type='submit'>submit</button>
   </form>
  </div>
 );
}
NewKegForm.PropTypes = {
onNewKegCreation: PropTypes.func
};
export default NewKegForm;