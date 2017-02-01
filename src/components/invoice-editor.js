import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as InvoiceActions from '../actions';
import ItemsTable from './items-table';
import { Summary } from './summary';

import './invoice-editor.css';

const InvoiceEditor = ({ items, actions }) =>
  <div className="invoice">
    <ItemsTable items={ items } actions={ actions } />
    <Summary items={ items } />
  </div>

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(InvoiceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEditor);
