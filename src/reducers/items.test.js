import items from './items';
import { ActionTypes } from '../actions/action-types';

describe('items reducer', () => {
  it('should handle initial state', () => {
    expect(
      items(undefined, {})
    ).toEqual([
      {
        name: 'widget',
        price: 10,
        qty: 2
      },
      {
        name: 'cog',
        price: 15.99,
        qty: 2
      }
    ]);
  });

  it('should handle ADD_ITEM', () => {
    expect(
      items([], {
        type: ActionTypes.ADD_ITEM,
        item: undefined,
        idx: 0
      })
    ).toEqual([
      {
        name: '',
        qty: 0,
        price: 0
      }
    ]);
  });

  it('should handle REMOVE_ITEM', () => {
    expect(
      items([
        {
          name: 'cog',
          qty: 2,
          price: 15
        }, {
          name: 'widget',
          qty: 1,
          price: 31.98
        }
      ], {
        type: ActionTypes.REMOVE_ITEM,
        idx: 1,
        item: undefined
      })
    ).toEqual([
      {
        name: 'cog',
        qty: 2,
        price: 15
      }
    ]);
  });

  it('should handle UPDATE_ITEM', () => {
    expect(
      items([
        {
          name: 'cog',
          qty: 2,
          price: 15
        }, {
          name: 'widget',
          qty: 1,
          price: 31.98
        }
      ], {
        type: ActionTypes.UPDATE_ITEM,
        idx: 1,
        item: {
          name: 'widget2',
          qty: 1,
          price: 32.98
        }
      })
    ).toEqual([
      {
        name: 'cog',
        qty: 2,
        price: 15
      }, {
        name: 'widget2',
        qty: 1,
        price: 32.98
      }
    ]);
  });

});
