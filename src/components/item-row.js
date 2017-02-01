import React from 'react';
import FontAwesome from 'react-fontawesome';

import './item-row.css';

class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
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
    data[type] = evt.target.value; // TODO validate this
    this.setState({
      data: data
    });
    this.props.onChange(data, 'edit');
  }

  handleRowClick() {
    if (this.state.editMode === false) {
      this.props.onClick();
    }
    this.setState({
      editMode: true
    });
  }

  render() {
    const { data } = this.state;
    let total = (data.qty * data.price).toFixed(2);
    return <div className="item">
      <div className="col-icon" onClick={ () => this.props.onChange(undefined, 'add') }><FontAwesome name="plus" /></div>
      <div className="col-text">
        { this.state.editMode ? <input type="text" className="edit-box" value={ data.name } onChange={ (evt) => this.handleChange(evt, 'name') } /> : <div className="editable-text" onClick={() => this.handleRowClick()}>{ data.name || '-'}</div> }
      </div>
      <div className="col-text">
         { this.state.editMode ? <input type="number" className="edit-box" value={ data.qty } onChange={ (evt) => this.handleChange(evt, 'qty') } /> : <div className="editable-text" onClick={() => this.handleRowClick()}> { data.qty || 0 }</div> }
      </div>
      <div className="col-text">
        { this.state.editMode ? <input type="number" className="edit-box" value={ data.price } onChange={ (evt) => this.handleChange(evt, 'price') } /> : <div className="editable-text" onClick={() => this.handleRowClick()}>{ data.price || 0 }</div> }
      </div>
      <div className="col-text">{ total }</div>
      <div className="col-icon">{ this.props.idx === 0 ? null : <FontAwesome name="times" onClick={ () => this.props.onChange(undefined, 'delete') }/> }</div>
    </div>;
  }
}

export default ItemRow;
