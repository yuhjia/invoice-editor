import React from 'react';
import { mount } from 'enzyme';

import ItemsTable from './items-table';


describe('<ItemsTable /> component', () => {

  it('renders a table with header', () => {
    const items = [{
      name: 'eraser',
      qty: 2,
      price: 1.99
    }];
    const wrapper = mount(<ItemsTable items={ items } />);
    expect(wrapper.find('.header').length).toEqual(1);
  });

  it('renders a table in view-only mode', () => {
    const items = [{
      name: 'eraser',
      qty: 2,
      price: 1.99
    }];
    const wrapper = mount(<ItemsTable items={ items } />);
    expect(wrapper.find('.edit-box').length).toEqual(0); // no input boxes
    expect(wrapper.find('.editable-text').length).toEqual(3);
  });

});
