import React from 'react';
import _ from 'lodash';

import './summary.css';

export const Summary = ({items}) => {
  let subTotal = _.sumBy(items, (item) => item.qty * item.price);
  return <div className="summary">
    <div className="subtotal">
      <div className="label">Subtotal</div>
      <div className="number">${subTotal.toFixed(2)}</div>
    </div>
    <div className="subtotal">
      <div className="label">Tax (5%)</div>
      <div className="number">${(subTotal * 0.05).toFixed(2)}</div>
    </div>
    <div className="subtotal">
      <div className="label">Total</div>
      <div className="number">${(subTotal + subTotal * 0.05).toFixed(2)}</div>
    </div>
  </div>;
};
