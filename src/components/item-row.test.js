import React from 'react';
import { mount } from 'enzyme';

import ItemRow from './item-row';


describe('<ItemRow /> component', () => {

  it('renders a row in view-only mode', () => {
    const item = {
      name: 'eraser',
      qty: 2,
      price: 1.99
    };
    const wrapper = mount(<ItemRow idx={ 0 } data={ item } editMode={ false } />);
    expect(wrapper.find('.editable-text').length).toEqual(3);
  });

  it('renders a row in edit mode', () => {
    const item = {
      name: 'eraser',
      qty: 2,
      price: 1.99
    };
    const wrapper = mount(<ItemRow idx={ 0 } data={ item } editMode={ true } />);
    expect(wrapper.find('.edit-box').length).toEqual(3);
  });

  it('renders with correct data in edit mode', () => {
    const item = {
      name: 'eraser',
      qty: 2,
      price: 1.99
    };
    const wrapper = mount(<ItemRow idx={ 0 } data={ item } editMode={ true } />);
    expect(wrapper.find('input[name="name"]').props().value).toEqual('eraser');
    expect(wrapper.find('input[name="qty"]').props().value).toEqual(2);
    expect(wrapper.find('input[name="price"]').props().value).toEqual(1.99);
  });

  it('renders with 2 buttons in a row', () => {
    const item = {
      name: 'eraser',
      qty: 2,
      price: 1.99
    };
    const wrapper = mount(<ItemRow idx={ 2 } data={ item } editMode={ false } />);
    expect(wrapper.find('.fa').length).toEqual(2);
  });

  it('renders with 1 button in the first row', () => {
    const item = {
      name: 'eraser',
      qty: 2,
      price: 1.99
    };
    const wrapper = mount(<ItemRow idx={ 0 } data={ item } editMode={ false } />);
    expect(wrapper.find('.fa').length).toEqual(1);
  });

});
