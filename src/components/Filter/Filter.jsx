import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterChange } from 'redux/actions/action.filter';

export const Filter = () => {
  const [filter, stFilter] = useState('');

  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterChange(value));
    stFilter(value);
  };

  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.filter__input}
          name="filter"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
