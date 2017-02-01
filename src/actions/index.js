import { ActionTypes } from './action-types';

export const addItem = (item, idx) => ({ type: ActionTypes.ADD_ITEM, item, idx });
export const removeItem = (item, idx) => ({ type: ActionTypes.REMOVE_ITEM, item, idx });
export const updateItem = (item, idx) => ({ type: ActionTypes.UPDATE_ITEM, item, idx });
