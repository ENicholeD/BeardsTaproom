/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Keg from './Keg';
import { prependOnceListener } from 'cluster';

function KegList(){
  var colorizing = {
    backgroundColor: 'lavender',
    textAlign: 'center',
    fontFamily: 'verdana',
    fontSize: '20px',
    marginLeft: '15%',
    marginRight: '15%',
  };
  return (
    <div style={colorizing}>
      <div className='col-md-8'>
      <hr/>
      {prependOnceListener.kegList.map((keg, index) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alcoholCon={keg.alcoholCon}
          pints={keg.pints}
          key={index} />
      )}
      </div>
    </div>
  );
}

export default KegList;