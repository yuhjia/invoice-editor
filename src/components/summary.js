import React from 'react';
import _ from 'lodash';

import './summary.css';

export const Summary = ({items}) => {
  let subTotal = _.sumBy(items, (item) => { return item.qty * item.price; });
  return (<div className="summary">
    <div className="subtotal">
      <div className="label">Subtotal</div><div>{subTotal.toFixed(2)}</div>
    </div>
    <div className="subtotal">
      <div className="label">Tax (5%)</div><div>{(subTotal * 0.05).toFixed(2)}</div>
    </div>
    <div className="subtotal">
      <div className="label">Total</div><div>{(subTotal + subTotal * 0.05).toFixed(2)}</div>
    </div>
  </div>);
}
