import update from 'immutability-helper';

import { ActionTypes } from '../actions/action-types';

const initialState = [
    { name: 'widget', qty: 2, price: 10.00 },
    { name: 'cog', qty: 2, price: 15.99 }
  ];

export default function items(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return update(state, { $splice: [[action.idx+1, 0, { name: '', qty: 0, price: 0 }]] });

    case ActionTypes.REMOVE_ITEM:
      return state.filter((item, idx) => action.idx !== idx);

    case ActionTypes.UPDATE_ITEM:
      return state.map((item, idx) => {
        if (action.idx === idx) {
          item.name = action.item.name;
          item.qty = action.item.qty;
          item.price = action.item.price;
        }
        return item;
      });

    default:
      return state;
  }
}
