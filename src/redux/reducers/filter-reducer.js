import { createReducer } from '@reduxjs/toolkit';
import { filterChange } from 'redux/actions/action.filter';

export default createReducer('', {
  [filterChange]: (state, action) => action.payload,
});
