import React from 'react';
import update from 'immutability-helper';

import ItemsTable from './items-table';
import { Summary } from './summary';

import './invoice-editor.css';

class InvoiceEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'widget', qty: 2, price: 10.00 },
        { name: 'cog', qty: 2, price: 15.99 }
      ]
    };
  }

  handleChange(data, idx, type) {
    if (type === 'edit') {
      this.setState({
        items: update(this.state.items, {[idx]: {$set: data}})
      });
    } else if (type === 'delete') {
      //this.state.items.splice(idx, 1);
      this.setState({
        items: update(this.state.items, {$splice: [[idx, 1]]})
      });
    } else if (type === 'add') {
      this.setState({
        items: update(this.state.items, {$splice: [[idx+1, 0, {name: '', qty: 0, price: 0}]]})
      });
    }
  }

  render() {
    return (
      <div className="invoice">
        <ItemsTable items={ this.state.items } onChange={ (data, idx, type) => this.handleChange(data, idx, type) } />
        <Summary items={ this.state.items } />
      </div>
    );
  }
}

export default InvoiceEditor;
