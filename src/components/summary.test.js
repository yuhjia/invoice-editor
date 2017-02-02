import React from 'react';
import { mount } from 'enzyme';

import { Summary } from './summary';


describe('<Summary /> component', () => {

  it('renders a summary with 3 rows', () => {
    const items = [{
      name: 'eraser',
      qty: 2,
      price: 1.99
    }];
    const wrapper = mount(<Summary items={ items } />);
    expect(wrapper.find('.label').length).toEqual(3);
  });

  it('renders a summary with 3 correct values for 1 item', () => {
    const items = [{
      name: 'eraser',
      qty: 2,
      price: 1.99
    }];
    const wrapper = mount(<Summary items={ items } />);
    expect(wrapper.find('.number').length).toEqual(3);
    expect(wrapper.find('.number').first().text()).toEqual('$3.98');
    expect(wrapper.find('.number').at(1).text()).toEqual('$0.20');
    expect(wrapper.find('.number').at(2).text()).toEqual('$4.18');
  });

  it('renders a summary with 3 correct values for multiple items', () => {
    const items = [{
      name: 'eraser',
      qty: 2,
      price: 1.99
    }, {
      name: 'pencil',
      qty: 1,
      price: 5.99
    }];
    const wrapper = mount(<Summary items={ items } />);
    expect(wrapper.find('.number').length).toEqual(3);
    expect(wrapper.find('.number').first().text()).toEqual('$9.97');
    expect(wrapper.find('.number').at(1).text()).toEqual('$0.50');
    expect(wrapper.find('.number').at(2).text()).toEqual('$10.47');
  });

});
