import React from 'react';
import ReactDOM from 'react-dom';
import ItemTable from './item-table';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemTable />, div);
});
