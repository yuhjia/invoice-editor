import React from 'react';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import './item-row.css';

class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      data: {
        name: props.data.name,
        qty: props.data.qty,
        price: props.data.price
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      editMode: nextProps.editMode
    });
  }

  handleChange(evt, type) {
    let data = this.state.data;
    data[type] = type !== 'name' ? this.validateNumber(evt.target.value, type) : evt.target.value;
    this.setState({
      data: data
    });
    this.props.onChange(data, 'edit');
  }

  handleRowClick(evt) {
    if (evt.target && evt.target.className === 'editable-text' && this.state.editMode === false) {
      this.props.onClick();
      this.setState({
        editMode: true
      });
    }
  }

  validateNumber(val, type) {
    let validatedVal = 0;
    try {
      validatedVal = type === 'qty' ? parseInt(val, 10) : parseFloat(val);
    } catch (e) {
      // do nothing
    }
    return _.isFinite(validatedVal) ? Math.abs(validatedVal) : 0; // reset to 0 if invalid number
  }

  render() {
    const { data } = this.state;
    let total = (data.qty * data.price).toFixed(2);
    return <div className="item" onClick={ (evt) => this.handleRowClick(evt) }>
      <div className="col-icon" onClick={ () => this.props.onChange(undefined, 'add') }>
        <FontAwesome name="plus" />
      </div>
      <div className="col-text">
        { this.state.editMode ?
          <input name="name"
            type="text"
            className="edit-box"
            value={ data.name }
            onChange={ (evt) => this.handleChange(evt, 'name') }
          /> :
          <div className="editable-text">{ data.name || '-'}</div>
        }
      </div>
      <div className="col-number">
        { this.state.editMode ?
          <input name="qty"
            type="number"
            className="edit-box number"
            value={ data.qty }
            onChange={ (evt) => this.handleChange(evt, 'qty') }
          /> :
          <div className="editable-text"> { data.qty || 0 }</div>
        }
      </div>
      <div className="col-number">
        { this.state.editMode ?
          <input name="price"
            type="number"
            className="edit-box number"
            value={ data.price }
            onChange={ (evt) => this.handleChange(evt, 'price') }
          /> :
          <ItemValue val={ data.price } />
        }
      </div>
      <div className="col-number">
        ${ total }
      </div>
      <div className="col-icon">
        { this.props.idx === 0 ? null : <FontAwesome name="times" onClick={ () => this.props.onChange(undefined, 'delete') }/> }
      </div>
    </div>;
  }
}

const ItemValue = ({val}) => {
  const formattedVal = _.isNumber(val) ? val.toFixed(2) : 0.00;
  return <div className="editable-text">${ formattedVal }</div>;
};

export default ItemRow;
