import React from 'react';

import ItemRow from './item-row';

import './items-table.css';

class ItemsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currRow: undefined
    };
  }

  handleEditRow(idx) {
    this.setState({
      currRow: idx
    });
  }

  render() {
    return <div>
      <ItemsTableHeader />
      { this.props.items.map((item, idx) =>
          <ItemRow key={ idx }
            idx={ idx }
            data={ item }
            onChange={ (data, type) => this.props.onChange(data, idx, type) }
            onClick={ () => this.handleEditRow(idx) }
            editMode={ this.state.currRow === idx ? true : false}
          />)
      }
    </div>;
  }
}

const ItemsTableHeader = () => <div className="header">
    <div className="col-icon"></div>
    <div className="col-text">Item</div>
    <div className="col-text">Qty</div>
    <div className="col-text">Price</div>
    <div className="col-text">Total</div>
    <div className="col-icon"></div>
  </div>

export default ItemsTable;
